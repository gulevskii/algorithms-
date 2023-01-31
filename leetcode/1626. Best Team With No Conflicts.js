/**Algorithm
Once we have sorted the players in ascending order of age, we will iterate them from smallest to largest age. For each player in the iteration, we either:

Add this player to the team if he doesn't conflict with the team.
Do not add the player to the team.

If the score of the current player is more than the last player we have chosen, we can add this player to the team; otherwise, not.
 */

var bestTeamScore = function(scores, ages) {
  const ageScorePair = []
  const n = ages.length
  for (let i=0; i<n; i++) {
    ageScorePair.push([ages[i], scores[i]])
  }
  ageScorePair.sort((a,b) => a[0] - b[0] || a[1] - b[1])
  const dp = new Array(n).fill().map(() => new Array(n).fill(null))
  
  return findMaxScore(dp, ageScorePair, -1, 0)
 };

function findMaxScore(dp, ageScorePair, prev, index) {
  if (index >= dp.length) {
    return 0
  }

  if (dp[prev+1][index] !== null) {
    return dp[prev+1][index]
  }

  if (prev === -1 || ageScorePair[index][1] >= ageScorePair[prev][1]) {
    return dp[prev+1][index] = Math.max(
      findMaxScore(dp, ageScorePair, prev, index+1), 
      findMaxScore(dp, ageScorePair, index, index+1) + ageScorePair[index][1])
  }

  return dp[prev+1][index] = findMaxScore(dp, ageScorePair, prev, index+1)
}
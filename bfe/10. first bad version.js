

// This is a JavaScript coding problem from BFE.dev 

/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let lo=0, hi=version

    while (lo <= hi) {
      const pivot = Math.floor((lo+hi) / 2)
      if (isBad(pivot)) {
        hi = pivot-1
      } else {
        lo = pivot+1
      }
    }
    
    return lo <= version ? lo : -1
  }
}

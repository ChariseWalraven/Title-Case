export const capitalize = (string) => string.charAt(0).toUpperCase() + string.substring(1)

// export const titleCase = (string) => {
//   const exclusions = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)"
//   const punctuation = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)"
//   // loop through array and capitalize each word if it's not in the exclusions array
//   string
//     .toLowerCase()
//     .split(" ")
//   // .forEach(char => )
// }


  this.titleCase = function(title) {
    const parts = [],
      // [] = include these characters, () = exclude these characters
      split = /[:.;?!] |(?: |^)["Ò]/g
    let index = 0

    while (true) {
      // search title for matches to the RegExp saved to split
      const m = split.exec(title);

      parts.push(
        // push a substring starting at 0. If m exists (i.e. there have been matches to the title) end at m.index : else end at title.length
        title.substring(index, m ? m.index : title.length)
        // replace the RegExp 
        .replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, (all) => {
          console.log(all)
          return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
        })
        .replace(RegExp("\\b" + small + "\\b", "ig"), this.toLowerCase)
        .replace(RegExp("^" + punct + small + "\\b", "ig"), (all, punct, word) => {
          return punct + upper(word);
        })
        .replace(RegExp("\\b" + small + punct + "$", "ig"), upper)
      );

      index = split.lastIndex;

      if (m) parts.push(m[0]);
      else break;
    }

    return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
      .replace(/(['Õ])S\b/ig, "$1s")
      .replace(/\b(AT&T|Q&A)\b/ig, function(all) {
        return all.toUpperCase();
      });
  };

   function lower(word) {
    return word.toLowerCase();
  }

  function upper(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }


export const titleCase = () {
  const small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
  const punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";

 }
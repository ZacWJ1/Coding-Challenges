function shortcut (string) {
    return string
    .split('')
    .filter(str=> !'aeiou'.includes(str))
    .join('')
   }
  
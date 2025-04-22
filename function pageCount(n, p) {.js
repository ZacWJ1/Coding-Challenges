function pageCount(n, p) {
    /*
		  n: the number of pages in the book
		  p: the page number to turn to
    */
//break down number of turns to get to the page from front
//break down number of turns to get to the back from front
//minus those two and you get the total number of pages from back to page
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);
}
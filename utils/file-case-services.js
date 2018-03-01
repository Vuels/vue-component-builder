/**
 * @desc    File for Case Type Conversion
 * 
 *          - Camel Case            - looksLikeThis
 *          - Capital Camel Case    - LooksLikeThis
 *          - Snake Case            - looks_like_this
 *          - Kebab Case            - looks-like-this
 *          - Flat Case             - lookslikethis
 *          - Upper Case            - LOOKS_LIKE_THIS
 *          - Pascal Case           - LooksLikeThis
 */

/**
 * @desc    Converts Titles to Where all words begin uppercased e.g. PascalCase
 */
function pascalCase (title) {
    const titleParts = title.toLowerCase().split(/[\s,_-]+/)
    return titleParts.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
}

/**
 * @desc    Converts Titles to where all words are split by hyphens e.g. kebab-case
 */
function kebabCase (title) {
    return title.toLowerCase().split(/[\s,_-]+/).join('-')
}

module.exports = {
    pascalCase,
    kebabCase
}

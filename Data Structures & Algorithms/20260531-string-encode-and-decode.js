class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs)  {
        return strs.map(str => {
            let result = ''
            for (const c of str) {
                result += c.charCodeAt() + ' ' ;
            }
            return result.trim() + ','
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return []
        const arr = str.split(',');
        arr.pop()
        return arr.map(element => {
            return element === '' ? '' : element.split(' ').map(e => String.fromCharCode(e)).join('')
        })
    }
}

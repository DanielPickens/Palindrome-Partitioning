func dfs(s string, begin int, current *[]string, result *[][]string) {
    
    if begin >= len(s) {
        str := make([]string, len(*current))
        copy(str, *current)
        *result = append(*result, str)
    }
    
    for i := begin; i < len(s); i++ {
        if isPalindrome(s, begin, i) {
            str := string(s[begin:i+1])
            *current = append(*current, str)
            dfs(s, i+1, current, result)
            *current = (*current)[:len(*current)-1]   
        }
    }
}

func partition(s string) [][]string {
    
    res := make([][]string, 0)
    curr := make([]string, 0)
    
    dfs(s, 0, &curr, &res)
    
    return res
}

func isPalindrome(s string, begins int, end int) bool {
    
    for begins < end {
        if s[begins] != s[end] {
            return false
        }
        begins++
        end--
    }
    
    return true
}

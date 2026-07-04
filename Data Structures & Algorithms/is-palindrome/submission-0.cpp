class Solution {
public:
    bool isPalindrome(string s) {
    string check;
        for(auto itr : s){
            if(isalnum(itr)){
                char c=tolower(itr);
                check+=c;
            }
        }
        int i=0;
        int j=check.length()-1;
    while(i<j){
        if(check[i]!=check[j]){
            return false;
        }
        i++;
        j--;
    }
        return true;
    }
};

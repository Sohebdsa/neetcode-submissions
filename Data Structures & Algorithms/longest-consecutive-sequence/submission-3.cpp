class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
         set <int> s(nums.begin(),nums.end());
        vector<int>copy(s.begin(),s.end());
        sort(copy.begin(),copy.end());
        int count=1; 
        int maxcount=INT_MIN;
        if(nums.empty()) return 0;
        for(int i=0;i<copy.size()-1;i++){
           if(copy[i] + 1 == copy[i + 1]) {
            count++;
        }
        else {
            maxcount = max(maxcount, count);
            count = 1;
            }
        }
        return max(maxcount,count);
    }
};

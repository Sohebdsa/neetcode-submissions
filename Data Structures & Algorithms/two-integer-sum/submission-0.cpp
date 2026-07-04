class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int check;
        unordered_map <int,int> map;
        for(int i=0;i<nums.size();i++){
            check=target-nums[i];
            if(map.find(check) !=map.end()){
                return {map[check],i};
            }
            map[nums[i]]=i;
        }
        return {};
    }
};

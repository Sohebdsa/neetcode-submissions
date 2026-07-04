class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector <int> v;
        int l=0;
        int r=nums.size()-1;
        while(l<r){
            int sum=nums[l]+nums[r];
            if(sum == target && l!=r){
                v.push_back(l+1);
                v.push_back(r+1);
                return v;
            }
            else if(sum > target && l!=r){
                r--;
            }
            else{
                l++;
            }
        }
        return {};
    }
};

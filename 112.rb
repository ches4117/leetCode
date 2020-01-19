# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {Integer} sum
# @return {Boolean}
def has_path_sum(root, sum)
    if root
        sum -= root.val
        if sum == 0 && !root.left && !root.right
            true
         else
            (root.left && has_path_sum(root.left, sum)) || (root.right && has_path_sum(root.right, sum)) || false
        end
    else
        false
    end
end
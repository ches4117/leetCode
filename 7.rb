# @param {Integer} x
# @return {Integer}
def reverse(x)
  sign = ''
  answer = ''
  if x < 0
    x = 0 - x
    sign = '-'
  end

  x = x.to_s
  length = x.length

  answer += sign
  rec = 0
  loop do 
    length -= 1
    if x[length] == '0' && rec == 0 && x.length > 1
      next
    else
      answer += x[length]
      rec = 1
    end
    break if length == 0
  end
end

reverse(123)
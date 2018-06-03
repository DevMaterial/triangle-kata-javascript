def FizzBuzz(max)
  num = 1
  result = []
  max.times do
    if num % 3 == 0 && num % 5 == 0
      result.push('FizzBuzz')
    elsif num % 3 == 0
      result.push('Fizz')
    elsif num % 5 == 0
      result.push('Buzz')
    else 
      result.push(num)
    end
    num += 1
  end
  return result
end

FizzBuzz(100)

require 'prime'

def oddEven
  num = 1
  100.times do
    if num.prime?
      puts num
    elsif num.even?
      puts "Even"
    elsif num.odd?
      puts "Odd"
    end
    num += 1
  end
end

oddEven
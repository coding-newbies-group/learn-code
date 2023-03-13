a = 10
b = 20
c = 30

# And
if (c > b and b > a):  # and两边都是真
    print(f'"c > b and b > a"的结果是: {c > b and b > a}')
    print("and两边都为真时整个式子为真")
if (c > b and b < a):  # and两边有一边是真
    print(f'"c > b and b < a"的结果是: {c > b and b < a}')
    print("and两边有一边为真时整个式子为真")

# Or
if (a > b or b > c):  # or的两边都是假
    print(f'"a > b or b > c"的结果是: {a > b or b > c}')
    print("or两边都为假时才是假")
if (a < b or b > c):  # or的两边有一边是真
    print(f'"a < b or b > c"的结果是: {a < b or b > c}')
    print("or两边有一边是真的时候就为真")

# Not
if (not (a > b)):  # a>b是假
    print(f'"not (a > b)"的结果是: {not (a > b)}')
    print("not可以把假变成真")
if (not (a < b)):  # a<b是真
    print(f'"not (a < b)"的结果是: {not (a < b)}')
    print("not可以把假变成真")

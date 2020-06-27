
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100000, years: 15, rate: 0.03})).toEqual("690.58");
  expect(calculateMonthlyPayment({amount: 100, years: 15, rate: 0.03})).toEqual("0.69")
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 100000, years: 15, rate: 0.03})).toEqual("690.58");
});

it('should manage higher rates', function(){
  expect(calculateMonthlyPayment({amount: 1000, years: 15, rate: 0.95})).toEqual("79.17");
})

it('should handle interest rate of zero', function(){
  expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 0.00})).toEqual("8.33")
})
/// etc

const add =require("./time")

const {test,expect,describe} = require("@jest/globals")
const time = require("./time")

describe("time ",function(){

    test("should work of  below  one minite",function(){
        expect(time(5200)).toBe("5 seconds")
    })

    test("should work of   one minite",function(){
        expect(time(60000)).toBe("1 minute")
    })

    
    test("should work of  minites",function(){
        expect(time(180000)).toBe("3 minutes")
    })

      
    test("should work of  hours",function(){
        expect(time(7200000)).toBe("2 hours")
    })

        
    test("should work of  hours",function(){
        expect(time(7210000)).toBe("2 horus 0 mimute 10 seconds")
    })

})
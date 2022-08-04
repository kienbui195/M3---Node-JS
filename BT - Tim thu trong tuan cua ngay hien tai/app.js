let day = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"]

class Today {
    constructor() {
        this.date = new Date()
    }

    getDay() {
        return this.date.getDay()
    }
}

let today = new Today()
console.log(`Hôm nay là thứ ${day[today.getDay()]}`)
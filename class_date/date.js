function myDate(day, month, year) {
    this.getDay = function () {
        return this.day;
    }

    this.getMonth = function () {
        return this.month;
    }
     this.getYear = function () {
         return this.year;
     }
     this.setDay = function (day) {
         this.day = day;
     }

    this.setMonth = function (month) {
        this.month = month;
    }

    this.setYear = function (year) {
        this.year = year;
    }
    
    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    this.toString = function () {
        alert(this.day+ "/" + this.month + "/" + this.year);
    }
}

var date = new myDate();
date.setDate(20, 10 ,2018);
date.toString();
const priceFormat = (price) => {
    let val = (price / 1).toFixed(0)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const discountPercentage = (prevPrice, presentPrice) => {
    return 100 - ((presentPrice/prevPrice)*100);
}

const getDateTimeDiff = (startDate, endDate) =>{

    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    const oneDay = 1000*60*60*24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDay = Math.round(diffInTime/oneDay);

    return diffInDay;

}


export {priceFormat, discountPercentage, getDateTimeDiff}
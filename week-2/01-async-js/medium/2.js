function getTime(){
    let now = new Date();

    const hours12 = now.getHours() % 12 || 12;
    const amPm = now.getHours() < 12 ? 'AM' : 'PM';

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const format12 = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;
    const format24 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.clear();
    console.log(format12);
    console.log(format24);
}
setInterval(getTime, 1000);
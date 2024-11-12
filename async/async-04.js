/** resolve, reject 그리고 에러 핸들링 */

const delayAdd = (index, callback, error) => {
    setTimeout(() => {
        if(index > 10) {
            error(`${index}는 10보다 클 수 없습니다.`);
            return;
        }
        console.log("index: ", index);
        callback(index + 1);
    }, 1000);
};

delayAdd(
    4, 
    (res) => console.log(res), 
    (err) => console.log(err)
);

delayAdd(
    13, 
    (res) => console.log(res), 
    (err) => console.log(err)
);

const newDelayAdd = (idx) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(idx > 10) {
                reject(`${idx}는 10보다 클 수 없습니다.`);
                return;
            }
            console.log("index: ", idx);
            resolve(idx + 1)
        }, 1000);
    });
};

/** Promise 인스턴스를 반환하기 때문에 then 메서드를 사용 가능 */
newDelayAdd(3)
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("Done"))

const wrap = async () => {
    try{
        const res = await newDelayAdd(9);
        console.log(res)
    } 
    catch {
        console.error(error)
    }
    finally {
        console.log("완료!")
    }
};

wrap();
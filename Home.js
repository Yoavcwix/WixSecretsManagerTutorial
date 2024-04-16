import { getData } from 'backend/getData.web'

$w.onReady(function () {

    $w("#btnGetData").onClick(async () => {
        const data = await getData()
        console.log(data)
    }); 

}); //onReady Closed

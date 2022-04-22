/* eslint-disable array-callback-return */
import brand from './brand';
import months from './months';


export function getSalesData (brandId, name) {
    let salesInfo = sales.filter((sale) => sale.brandId === brandId )
    salesInfo = salesInfo.map((sale) => sale.sales)

    return {
        labels: months,
        datasets: [
            {
                label: name || '',
                data: salesInfo,
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    }
}

export function generateSales() {
    const salesArray = []
    brand.map((o) => {
        for(var i = 0; i <= 11 ; i++){
            let sale = {
                month: months[i],
                brandId: o.id,
                productId: o.productId,
                sales: parseInt(Math.random() * 1000)
            }
            salesArray.push(sale)
        }
    })   
    return salesArray
}

const sales = [
    {
        month: "Jan",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 384
    },
    {
        month: "Feb",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 195
    },
    {
        month: "Mar",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 946
    },
    {
        month: "Apr",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 357
    },
    {
        month: "May",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 656
    },
    {
        month: "Jun",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 179
    },
    {
        month: "Jul",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 795
    },
    {
        month: "Aug",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 876
    },
    {
        month: "Sep",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 528
    },
    {
        month: "Oct",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 208
    },
    {
        month: "Nov",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 472
    },
    {
        month: "Dec",
        brandId: "marcamacarrao1",
        productId: "macarrao",
        sales: 152
    },
    {
        month: "Jan",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 394
    },
    {
        month: "Feb",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 80
    },
    {
        month: "Mar",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 64
    },
    {
        month: "Apr",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 656
    },
    {
        month: "May",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 813
    },
    {
        month: "Jun",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 211
    },
    {
        month: "Jul",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 67
    },
    {
        month: "Aug",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 462
    },
    {
        month: "Sep",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 437
    },
    {
        month: "Oct",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 782
    },
    {
        month: "Nov",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 966
    },
    {
        month: "Dec",
        brandId: "marcamacarrao2",
        productId: "macarrao",
        sales: 228
    },
    {
        month: "Jan",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 634
    },
    {
        month: "Feb",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 593
    },
    {
        month: "Mar",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 920
    },
    {
        month: "Apr",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 163
    },
    {
        month: "May",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 429
    },
    {
        month: "Jun",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 565
    },
    {
        month: "Jul",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 0
    },
    {
        month: "Aug",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 99
    },
    {
        month: "Sep",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 451
    },
    {
        month: "Oct",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 131
    },
    {
        month: "Nov",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 680
    },
    {
        month: "Dec",
        brandId: "marcamacarrao3",
        productId: "macarrao",
        sales: 923
    },
    {
        month: "Jan",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 577
    },
    {
        month: "Feb",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 199
    },
    {
        month: "Mar",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 201
    },
    {
        month: "Apr",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 314
    },
    {
        month: "May",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 833
    },
    {
        month: "Jun",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 574
    },
    {
        month: "Jul",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 643
    },
    {
        month: "Aug",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 807
    },
    {
        month: "Sep",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 300
    },
    {
        month: "Oct",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 854
    },
    {
        month: "Nov",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 113
    },
    {
        month: "Dec",
        brandId: "marcamaca1",
        productId: "maca",
        sales: 32
    },
    {
        month: "Jan",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 837
    },
    {
        month: "Feb",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 138
    },
    {
        month: "Mar",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 174
    },
    {
        month: "Apr",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 7
    },
    {
        month: "May",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 578
    },
    {
        month: "Jun",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 222
    },
    {
        month: "Jul",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 853
    },
    {
        month: "Aug",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 554
    },
    {
        month: "Sep",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 200
    },
    {
        month: "Oct",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 97
    },
    {
        month: "Nov",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 639
    },
    {
        month: "Dec",
        brandId: "marcamaca2",
        productId: "maca",
        sales: 762
    },
    {
        month: "Jan",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 806
    },
    {
        month: "Feb",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 455
    },
    {
        month: "Mar",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 821
    },
    {
        month: "Apr",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 443
    },
    {
        month: "May",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 469
    },
    {
        month: "Jun",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 635
    },
    {
        month: "Jul",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 109
    },
    {
        month: "Aug",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 822
    },
    {
        month: "Sep",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 423
    },
    {
        month: "Oct",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 568
    },
    {
        month: "Nov",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 230
    },
    {
        month: "Dec",
        brandId: "marcamaca3",
        productId: "maca",
        sales: 827
    },
    {
        month: "Jan",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 523
    },
    {
        month: "Feb",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 398
    },
    {
        month: "Mar",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 820
    },
    {
        month: "Apr",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 550
    },
    {
        month: "May",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 643
    },
    {
        month: "Jun",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 41
    },
    {
        month: "Jul",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 474
    },
    {
        month: "Aug",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 725
    },
    {
        month: "Sep",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 186
    },
    {
        month: "Oct",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 782
    },
    {
        month: "Nov",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 760
    },
    {
        month: "Dec",
        brandId: "marcacarne1",
        productId: "carne",
        sales: 449
    },
    {
        month: "Jan",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 293
    },
    {
        month: "Feb",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 432
    },
    {
        month: "Mar",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 47
    },
    {
        month: "Apr",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 380
    },
    {
        month: "May",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 371
    },
    {
        month: "Jun",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 296
    },
    {
        month: "Jul",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 102
    },
    {
        month: "Aug",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 366
    },
    {
        month: "Sep",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 969
    },
    {
        month: "Oct",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 444
    },
    {
        month: "Nov",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 945
    },
    {
        month: "Dec",
        brandId: "marcacarne2",
        productId: "carne",
        sales: 640
    },
    {
        month: "Jan",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 212
    },
    {
        month: "Feb",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 561
    },
    {
        month: "Mar",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 642
    },
    {
        month: "Apr",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 851
    },
    {
        month: "May",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 726
    },
    {
        month: "Jun",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 847
    },
    {
        month: "Jul",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 68
    },
    {
        month: "Aug",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 860
    },
    {
        month: "Sep",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 388
    },
    {
        month: "Oct",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 82
    },
    {
        month: "Nov",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 404
    },
    {
        month: "Dec",
        brandId: "marcacarne3",
        productId: "carne",
        sales: 926
    },
    {
        month: "Jan",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 276
    },
    {
        month: "Feb",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 958
    },
    {
        month: "Mar",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 193
    },
    {
        month: "Apr",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 49
    },
    {
        month: "May",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 122
    },
    {
        month: "Jun",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 814
    },
    {
        month: "Jul",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 814
    },
    {
        month: "Aug",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 908
    },
    {
        month: "Sep",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 264
    },
    {
        month: "Oct",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 985
    },
    {
        month: "Nov",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 205
    },
    {
        month: "Dec",
        brandId: "marcacamisa1",
        productId: "camisa",
        sales: 697
    },
    {
        month: "Jan",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 705
    },
    {
        month: "Feb",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 11
    },
    {
        month: "Mar",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 983
    },
    {
        month: "Apr",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 154
    },
    {
        month: "May",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 119
    },
    {
        month: "Jun",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 596
    },
    {
        month: "Jul",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 486
    },
    {
        month: "Aug",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 174
    },
    {
        month: "Sep",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 681
    },
    {
        month: "Oct",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 312
    },
    {
        month: "Nov",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 199
    },
    {
        month: "Dec",
        brandId: "marcacamisa2",
        productId: "camisa",
        sales: 547
    },
    {
        month: "Jan",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 988
    },
    {
        month: "Feb",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 608
    },
    {
        month: "Mar",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 406
    },
    {
        month: "Apr",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 764
    },
    {
        month: "May",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 158
    },
    {
        month: "Jun",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 7
    },
    {
        month: "Jul",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 671
    },
    {
        month: "Aug",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 338
    },
    {
        month: "Sep",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 407
    },
    {
        month: "Oct",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 231
    },
    {
        month: "Nov",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 42
    },
    {
        month: "Dec",
        brandId: "marcacamisa3",
        productId: "camisa",
        sales: 171
    },
    {
        month: "Jan",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 98
    },
    {
        month: "Feb",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 651
    },
    {
        month: "Mar",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 998
    },
    {
        month: "Apr",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 129
    },
    {
        month: "May",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 710
    },
    {
        month: "Jun",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 887
    },
    {
        month: "Jul",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 183
    },
    {
        month: "Aug",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 371
    },
    {
        month: "Sep",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 674
    },
    {
        month: "Oct",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 78
    },
    {
        month: "Nov",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 295
    },
    {
        month: "Dec",
        brandId: "marcacalca1",
        productId: "calca",
        sales: 939
    },
    {
        month: "Jan",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 837
    },
    {
        month: "Feb",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 193
    },
    {
        month: "Mar",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 325
    },
    {
        month: "Apr",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 88
    },
    {
        month: "May",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 281
    },
    {
        month: "Jun",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 833
    },
    {
        month: "Jul",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 167
    },
    {
        month: "Aug",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 200
    },
    {
        month: "Sep",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 273
    },
    {
        month: "Oct",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 640
    },
    {
        month: "Nov",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 625
    },
    {
        month: "Dec",
        brandId: "marcacalca2",
        productId: "calca",
        sales: 833
    },
    {
        month: "Jan",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 360
    },
    {
        month: "Feb",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 475
    },
    {
        month: "Mar",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 308
    },
    {
        month: "Apr",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 872
    },
    {
        month: "May",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 235
    },
    {
        month: "Jun",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 529
    },
    {
        month: "Jul",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 633
    },
    {
        month: "Aug",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 837
    },
    {
        month: "Sep",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 791
    },
    {
        month: "Oct",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 166
    },
    {
        month: "Nov",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 821
    },
    {
        month: "Dec",
        brandId: "marcacalca3",
        productId: "calca",
        sales: 91
    },
    {
        month: "Jan",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 748
    },
    {
        month: "Feb",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 389
    },
    {
        month: "Mar",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 315
    },
    {
        month: "Apr",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 490
    },
    {
        month: "May",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 819
    },
    {
        month: "Jun",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 95
    },
    {
        month: "Jul",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 190
    },
    {
        month: "Aug",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 976
    },
    {
        month: "Sep",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 703
    },
    {
        month: "Oct",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 246
    },
    {
        month: "Nov",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 342
    },
    {
        month: "Dec",
        brandId: "marcasapato1",
        productId: "sapato",
        sales: 833
    },
    {
        month: "Jan",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 984
    },
    {
        month: "Feb",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 648
    },
    {
        month: "Mar",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 4
    },
    {
        month: "Apr",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 301
    },
    {
        month: "May",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 532
    },
    {
        month: "Jun",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 697
    },
    {
        month: "Jul",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 877
    },
    {
        month: "Aug",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 937
    },
    {
        month: "Sep",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 615
    },
    {
        month: "Oct",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 664
    },
    {
        month: "Nov",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 754
    },
    {
        month: "Dec",
        brandId: "marcasapato2",
        productId: "sapato",
        sales: 904
    },
    {
        month: "Jan",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 86
    },
    {
        month: "Feb",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 986
    },
    {
        month: "Mar",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 227
    },
    {
        month: "Apr",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 909
    },
    {
        month: "May",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 880
    },
    {
        month: "Jun",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 451
    },
    {
        month: "Jul",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 459
    },
    {
        month: "Aug",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 525
    },
    {
        month: "Sep",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 92
    },
    {
        month: "Oct",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 760
    },
    {
        month: "Nov",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 783
    },
    {
        month: "Dec",
        brandId: "marcasapato3",
        productId: "sapato",
        sales: 695
    },
    {
        month: "Jan",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 149
    },
    {
        month: "Feb",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 731
    },
    {
        month: "Mar",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 592
    },
    {
        month: "Apr",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 513
    },
    {
        month: "May",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 531
    },
    {
        month: "Jun",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 756
    },
    {
        month: "Jul",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 542
    },
    {
        month: "Aug",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 5
    },
    {
        month: "Sep",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 771
    },
    {
        month: "Oct",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 553
    },
    {
        month: "Nov",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 178
    },
    {
        month: "Dec",
        brandId: "marcasagua1",
        productId: "agua",
        sales: 402
    },
    {
        month: "Jan",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 989
    },
    {
        month: "Feb",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 431
    },
    {
        month: "Mar",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 437
    },
    {
        month: "Apr",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 408
    },
    {
        month: "May",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 269
    },
    {
        month: "Jun",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 804
    },
    {
        month: "Jul",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 912
    },
    {
        month: "Aug",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 813
    },
    {
        month: "Sep",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 503
    },
    {
        month: "Oct",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 342
    },
    {
        month: "Nov",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 251
    },
    {
        month: "Dec",
        brandId: "marcaagua2",
        productId: "agua",
        sales: 211
    },
    {
        month: "Jan",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 267
    },
    {
        month: "Feb",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 386
    },
    {
        month: "Mar",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 442
    },
    {
        month: "Apr",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 687
    },
    {
        month: "May",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 47
    },
    {
        month: "Jun",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 406
    },
    {
        month: "Jul",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 518
    },
    {
        month: "Aug",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 501
    },
    {
        month: "Sep",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 983
    },
    {
        month: "Oct",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 68
    },
    {
        month: "Nov",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 350
    },
    {
        month: "Dec",
        brandId: "marcaagua3",
        productId: "agua",
        sales: 844
    },
    {
        month: "Jan",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 350
    },
    {
        month: "Feb",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 441
    },
    {
        month: "Mar",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 459
    },
    {
        month: "Apr",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 538
    },
    {
        month: "May",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 166
    },
    {
        month: "Jun",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 262
    },
    {
        month: "Jul",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 880
    },
    {
        month: "Aug",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 460
    },
    {
        month: "Sep",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 943
    },
    {
        month: "Oct",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 439
    },
    {
        month: "Nov",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 229
    },
    {
        month: "Dec",
        brandId: "marcasuco1",
        productId: "suco",
        sales: 352
    },
    {
        month: "Jan",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 307
    },
    {
        month: "Feb",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 80
    },
    {
        month: "Mar",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 68
    },
    {
        month: "Apr",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 256
    },
    {
        month: "May",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 393
    },
    {
        month: "Jun",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 183
    },
    {
        month: "Jul",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 624
    },
    {
        month: "Aug",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 64
    },
    {
        month: "Sep",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 158
    },
    {
        month: "Oct",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 56
    },
    {
        month: "Nov",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 355
    },
    {
        month: "Dec",
        brandId: "marcasuco2",
        productId: "suco",
        sales: 735
    },
    {
        month: "Jan",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 264
    },
    {
        month: "Feb",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 375
    },
    {
        month: "Mar",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 195
    },
    {
        month: "Apr",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 80
    },
    {
        month: "May",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 722
    },
    {
        month: "Jun",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 868
    },
    {
        month: "Jul",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 261
    },
    {
        month: "Aug",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 681
    },
    {
        month: "Sep",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 42
    },
    {
        month: "Oct",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 948
    },
    {
        month: "Nov",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 639
    },
    {
        month: "Dec",
        brandId: "marcasuco3",
        productId: "suco",
        sales: 753
    },
    {
        month: "Jan",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 322
    },
    {
        month: "Feb",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 479
    },
    {
        month: "Mar",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 965
    },
    {
        month: "Apr",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 907
    },
    {
        month: "May",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 910
    },
    {
        month: "Jun",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 156
    },
    {
        month: "Jul",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 301
    },
    {
        month: "Aug",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 640
    },
    {
        month: "Sep",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 641
    },
    {
        month: "Oct",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 535
    },
    {
        month: "Nov",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 573
    },
    {
        month: "Dec",
        brandId: "marcaleite1",
        productId: "leite",
        sales: 297
    },
    {
        month: "Jan",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 536
    },
    {
        month: "Feb",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 910
    },
    {
        month: "Mar",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 577
    },
    {
        month: "Apr",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 719
    },
    {
        month: "May",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 6
    },
    {
        month: "Jun",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 351
    },
    {
        month: "Jul",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 692
    },
    {
        month: "Aug",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 329
    },
    {
        month: "Sep",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 305
    },
    {
        month: "Oct",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 561
    },
    {
        month: "Nov",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 621
    },
    {
        month: "Dec",
        brandId: "marcaleite2",
        productId: "leite",
        sales: 327
    },
    {
        month: "Jan",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 332
    },
    {
        month: "Feb",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 856
    },
    {
        month: "Mar",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 709
    },
    {
        month: "Apr",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 631
    },
    {
        month: "May",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 563
    },
    {
        month: "Jun",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 304
    },
    {
        month: "Jul",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 333
    },
    {
        month: "Aug",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 200
    },
    {
        month: "Sep",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 851
    },
    {
        month: "Oct",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 884
    },
    {
        month: "Nov",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 379
    },
    {
        month: "Dec",
        brandId: "marcaleite3",
        productId: "leite",
        sales: 871
    }
]

export default sales
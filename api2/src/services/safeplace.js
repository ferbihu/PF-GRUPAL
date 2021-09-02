async function getSafePlaces (){
    return [{
        id:1,
        name:"casaRosada",
        latitude:-34.615689,
        longitude:-58.435104,
        description:"este es un lugar seguro..",
        image:"https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2019/04/476590.jpg?7.2.4"
    },
    {
        id:2,
        name:"teatroColon",
        latitude:-34.6074462,
        longitude:-58.3831664,
        description:"este es un lugar seguro..",
        image:"http://teatrocolon.org.ar/sites/default/files/styles/d8/public/2019-10/teatro-colon_exterior_001.jpg?itok=H4-VExa7://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2019/04/476590.jpg?7.2.4"
    }
    ];
};


module.exports = {getSafePlaces}
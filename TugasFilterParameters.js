function panggilFilterParameter(value){
    var arr = [
        {negara: 'indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
  ];
 
  var benuaEropa = arr.filter(item=> {
    return item.benua === "Eropa";
  });
 
  console.log(benuaEropa);
 }
 panggilFilterParameter()
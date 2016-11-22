// actionFunctions is like:
// {
//  'type0': function (){},
//  'type1':function (){}
// }

function actionCreator(actionFunctions){
  const types = Object.keys(actionFunctions)
  const actions = Object.values(actionFunctions)
  var a = {}
  var b = {}
  actions.forEach((value, index) => {
    a[types[index]] = types[index]
    b[value.name] = value
  })

  return {
    actionTypes: a,
    actions: b,
  }
}

export default actionCreator

ServerEvents.recipes(event => {

    event.recipes.gtceu.packer('getsentientsmpile')
        .itemInputs(
            '9x kubejs:senironspeck'
        )
        .itemOutputs(
            'kubejs:senironsmpile'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.packer('getsentientinggot')
        .itemInputs(
            '9x kubejs:senironsmpile'
        )
        .itemOutputs(
            'kubejs:seniron'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])


})
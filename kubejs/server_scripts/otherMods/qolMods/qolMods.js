ServerEvents.recipes((event) => {

    //SFM
    event.replaceInput(
        'sfm:manager',
        'minecraft:repeater',
        '#gtceu:circuits/hv'
    )

    //building wand
    event.replaceInput(
        'constructionwand:infinity_wand',
        'minecraft:nether_star',
        '#gtceu:circuits/ev'
    )

    //baubly
    event.remove('bhc:yellow_heart')
    event.remove('bhc:red_heart')
    event.remove('bhc:blue_heart')
    event.remove('bhc:green_heart')

    event.recipes.gtceu.assembler('getgreeenheart')
        .itemInputs(
            'bhc:yellow_heart'
        )
        .inputFluids(
            'gregecore:superelement27'
        )
        .itemOutputs(
            'bhc:green_heart'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

})
ServerEvents.recipes((event) => {

    event.recipes.gtceu.star_maykr_singularities("starmaykr1")
        .itemInputs(
            '500x #gtceu:circuits/lv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:lvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 350)

    event.recipes.gtceu.star_maykr_singularities("starmaykr2")
        .itemInputs(
            '450x #gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:mvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr3")
        .itemInputs(
            '400x #gtceu:circuits/hv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:hvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 250)

    event.recipes.gtceu.star_maykr_singularities("starmaykr4")
        .itemInputs(
            '350x #gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:evcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 200)

    event.recipes.gtceu.star_maykr_singularities("starmaykr5")
        .itemInputs(
            '300x #gtceu:circuits/iv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:ivcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 150)

    event.recipes.gtceu.star_maykr_singularities("starmaykr6")
        .itemInputs(
            '250x #gtceu:circuits/luv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:luvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 100)

    event.recipes.gtceu.star_maykr_singularities("starmaykr7")
        .itemInputs(
            '200x #gtceu:circuits/zpm'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:zpmcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 75)

    event.recipes.gtceu.star_maykr_singularities("starmaykr8")
        .itemInputs(
            '150x #gtceu:circuits/uv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr9")
        .itemInputs(
            '100x #gtceu:circuits/uhv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uhvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 25)

    event.remove('avaritia:record_fragment')
    event.recipes.gtceu.star_maykr_singularities("starmaykr10")
        .itemInputs(
            'botania:terrasteel_ingot',
            'kubejs:twilightingots',
            'ad_astra:calorite_ingot',
            'botanicalextramachinery:crimson_ingot',
            'undergarden:forgotten_ingot',
            'kubejs:iceshard',
            'bloodmagic:etherealslate',
            'enchanted:mystic_unguent',
            'draconicevolution:awakened_draconium_ingot'
        )
        .itemOutputs(
            'avaritia:record_fragment'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 400)

    event.remove('avaritia:eternal_singularity')
    event.recipes.gtceu.star_maykr_singularities("starmaykr11")
        .itemInputs(
            Item.of('avaritia:singularity', {Id: "avaritia:lvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id: "avaritia:mvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:hvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:evcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:ivcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:luvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:zpmcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:uvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:uhvcircuitsingularity"}).weakNBT(),
        )
        .itemOutputs(
            'avaritia:eternal_singularity'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 450)

});

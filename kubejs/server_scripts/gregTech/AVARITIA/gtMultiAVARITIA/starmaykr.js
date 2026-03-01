ServerEvents.recipes((event) => {

    event.recipes.gtceu.star_maykr_singularities("starmaykr1")
        .itemInputs(
            '5000x #gtceu:circuits/lv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:lvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr2")
        .itemInputs(
            '4500x #gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:mvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr3")
        .itemInputs(
            '4000x #gtceu:circuits/hv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:hvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr4")
        .itemInputs(
            '3500x #gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:evcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr5")
        .itemInputs(
            '3000x #gtceu:circuits/iv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:ivcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr6")
        .itemInputs(
            '2500x #gtceu:circuits/luv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:luvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr7")
        .itemInputs(
            '2000x #gtceu:circuits/zpm'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:zpmcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr8")
        .itemInputs(
            '1500x #gtceu:circuits/uv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

    event.recipes.gtceu.star_maykr_singularities("starmaykr9")
        .itemInputs(
            '1000x #gtceu:circuits/uhv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uhvcircuitsingularity"}')
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 300)

});
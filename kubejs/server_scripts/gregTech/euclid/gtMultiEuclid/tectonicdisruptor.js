ServerEvents.recipes((event) => {

    event.recipes.gtceu.tectonicdisruptor()
        .itemOutputs(
            '4x gtceu:raw_delirium'
        )
        .dimension("gregecore:fracture_dimension")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    event.recipes.gtceu.tectonicdisruptor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .itemOutputs(
            '32x gtceu:raw_delirium'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.tectonicdisruptor()
        .itemOutputs(
            '4x gtceu:raw_atarax'
        )
        .dimension("gregecore:fracture_dimension")
        .circuit(3)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    event.recipes.gtceu.tectonicdisruptor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .itemOutputs(
            '32x gtceu:raw_atarax'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.tectonicdisruptor()
        .itemOutputs(
            '4x gtceu:raw_delta_latgrium'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .circuit(5)
        .dimension("gregecore:fracture_dimension")

    event.recipes.gtceu.tectonicdisruptor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .itemOutputs(
            '32x gtceu:raw_delta_latgrium'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .circuit(6)

    event.recipes.gtceu.tectonicdisruptor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .outputFluids(
            'gtceu:fracturedoil 10000'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .circuit(8)


})
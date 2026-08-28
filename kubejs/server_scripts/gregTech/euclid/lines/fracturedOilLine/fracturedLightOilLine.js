ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:fracturedlightoil 1000'
        )
        .outputFluids(
            'gtceu:fracturedsludge 800', 
            'gtceu:fracturedfossilmaterial 200',
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .circuit(1)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:fracturedfossilmaterial 144'
        )
        .itemOutputs(
            'gtceu:fracturedfossilmaterial_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_ingot'
        )
        .itemOutputs(
            '2x gtceu:fracturedfossilmaterial_rod'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_ingot'
        )
        .itemOutputs(
            '2x gtceu:fracturedfossilmaterial_single_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:fracturedfossilmaterial_rod'
        )
        .itemOutputs(
            'gtceu:fracturedfossilmaterial_frame'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .circuit(4)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:fracturedsludge 1000'
        )
        .itemOutputs(
            '2x gtceu:fracturedsludgedust_dust',
            '3x gtceu:sulfur_dust',
            'gtceu:small_stone_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:fracturedsludgedust_dust'
        )
        .outputFluids(
            'gtceu:fracturedsludgedust 144'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'gtceu:gravi_star'
        )
        .inputFluids(
            'gtceu:fracturedsludgedust 576'
        )
        .itemOutputs(
            'kubejs:euclid/quarrystar'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)


})
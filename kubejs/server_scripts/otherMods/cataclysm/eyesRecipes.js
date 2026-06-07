ServerEvents.recipes((event) => {

    event.remove('cataclysm:mech_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:compass',
            '16x gtceu:steel_ingot'
        )
        .inputFluids(
            'gregecore:perditio_essentia 100',
            'gregecore:ordo_essentia 100'
        )
        .itemOutputs(
            'cataclysm:mech_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,1")

    event.remove('cataclysm:abyss_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:compass',
            '16x #grege:witherite'
        )
        .inputFluids(
            'gregecore:aqua_essentia 500',
            'gregecore:terra_essentia 500'
        )
        .itemOutputs(
            'cataclysm:abyss_eye'
        )
        .duration(600)
        .addData('essentia', "1,1,0,0,0,0")

    event.remove('cataclysm:desert_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/hv',
            'minecraft:compass',
            '16x gtceu:abyssal_wire_ingot'
        )
        .inputFluids(
            'gregecore:aer_essentia 1500',
            'gregecore:ignis_essentia 1500'
        )
        .itemOutputs(
            'cataclysm:desert_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,1,1,0,0")

    //aqua, terra, aer, ignis, perditio, ordo

})
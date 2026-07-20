ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:giantreactionchamber', 1),
        [
            'DAD',
            'EFE',
            'BCB'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'kubejs:machine_casing_tiled_dark_gray',
            C: 'kubejs:machine_casing_tiled_light_gray',
            D: 'advanced_ae:quantum_alloy_plate',
            E: 'gtceu:laminated_glass',
            F: 'gtceu:iv_machine_hull'
        }
    )

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            'advanced_ae:quantum_infused_dust'
        )
        .inputFluids(
            'minecraft:water 4000'
        )
        .outputFluids(
            'advanced_ae:quantum_infusion_source 2000'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '32x ae2:certus_quartz_crystal'
        )
        .inputFluids(
            'minecraft:water 1000'
        )
        .itemOutputs(
            '64x ae2:charged_certus_quartz_crystal'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '8x advanced_ae:quantum_alloy',
            '4x gtceu:titanium_ingot',
            'minecraft:nether_star'
        )
        .inputFluids(
            'minecraft:water 500'
        )
        .itemOutputs(
            '2x advanced_ae:quantum_alloy_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '8x ae2:charged_certus_quartz_crystal',
            '8x minecraft:redstone',
            '8x minecraft:quartz'
        )
        .inputFluids(
            'minecraft:water 500'
        )
        .itemOutputs(
            '64x ae2:fluix_crystal'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '16x ae2:charged_certus_quartz_crystal',
            '16x ae2:fluix_dust'
        )
        .inputFluids(
            'minecraft:water 500'
        )
        .itemOutputs(
            '64x ae2:fluix_crystal'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            'ae2:singularity',
            '2x #forge:dusts/ender_pearl',
            '2x ae2:sky_dust'
        )
        .inputFluids(
            'minecraft:lava 500'
        )
        .itemOutputs(
            '4x advanced_ae:shattered_singularity'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '8x ae2:charged_certus_quartz_crystal',
            '8x minecraft:iron_ingot',
            '8x ae2:sky_stone_block'
        )
        .inputFluids(
            'minecraft:lava 500'
        )
        .itemOutputs(
            '64x megacells:sky_steel_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '256x minecraft:cobblestone',
        )
        .inputFluids(
            'minecraft:lava 2500'
        )
        .itemOutputs(
            '32x ae2:matter_ball'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '4x minecraft:copper_ingot',
            '4x ae2:singularity',
            '4x advanced_ae:shattered_singularity'
        )
        .inputFluids(
            'advanced_ae:quantum_infusion_source 1000'
        )
        .itemOutputs(
            'advanced_ae:quantum_alloy'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '4x advanced_ae:quantum_alloy',
            '2x ae2:pattern_provider'
        )
        .inputFluids(
            'gtceu:epichlorohydrin 100'
        )
        .itemOutputs(
            'mae2:pattern_multi_p2p_tunnel'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.giantreactionchamber()
        .itemInputs(
            '64x ae2:matter_ball'
        )
        .inputFluids(
            'minecraft:lava 100'
        )
        .itemOutputs(
            '2x ae2:singularity'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

})
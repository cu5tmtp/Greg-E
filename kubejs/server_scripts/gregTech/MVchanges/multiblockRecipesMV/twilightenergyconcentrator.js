ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:twilightenergyconcentrator', 1),
        [
            'BCB',
            'DAD',
            'BCB'
        ],
        {
            A: 'gtceu:mv_machine_hull',
            B: 'kubejs:machine_casing_block_green',
            C: 'gtceu:mv_electric_motor',
            D: '#gtceu:circuits/mv'
        }
    )

    event.recipes.gtceu.extractor()
        .itemInputs(
            '#grege:predictions'
        )
        .itemOutputs(
            'kubejs:emptyprediction'
        )
        .outputFluids(
            'gtceu:predictionfluid 144'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '2x glass_pane',
            'gtceu:iron_ring'
        )
        .itemOutputs(
            'kubejs:emptyprediction'
        )
        .inputFluids(
            'gtceu:rubber 72'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.canner()
        .inputFluids(
            'gtceu:predictionfluid 288'
        )
        .itemOutputs(
            'hostilenetworks:overworld_prediction'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.canner()
        .inputFluids(
            'gtceu:predictionfluid 288'
        )
        .itemOutputs(
            'hostilenetworks:nether_prediction'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.canner()
        .inputFluids(
            'gtceu:predictionfluid 288'
        )
        .itemOutputs(
            'hostilenetworks:end_prediction'
        )
        .circuit(3)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.canner()
        .inputFluids(
            'gtceu:predictionfluid 288'
        )
        .itemOutputs(
            'hostilenetworks:twilight_prediction'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.twilightenergyconcentrator('lichprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/lich"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(1)
        .biome("twilightforest:forest")

    event.recipes.gtceu.twilightenergyconcentrator('minoshroomprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/minoshroom"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(2)
        .biome("twilightforest:swamp")

    event.recipes.gtceu.twilightenergyconcentrator('snowqueenprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/snow_queen"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(3)
        .biome("twilightforest:glacier")

    event.recipes.gtceu.twilightenergyconcentrator('trollprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/troll"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(4)
        .biome("twilightforest:highlands")

    event.recipes.gtceu.twilightenergyconcentrator('urghastprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/ur_ghast"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(5)
        .biome("twilightforest:dark_forest_center")

    event.recipes.gtceu.twilightenergyconcentrator('alphayetiprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/alpha_yeti"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(6)
        .biome("twilightforest:snowy_forest")

    event.recipes.gtceu.twilightenergyconcentrator('hydraprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/hydra"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(7)
        .biome("twilightforest:fire_swamp")

    event.recipes.gtceu.twilightenergyconcentrator('knightphantomprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/knight_phantom"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(8)
        .biome("twilightforest:dark_forest")

    event.recipes.gtceu.twilightenergyconcentrator('bighornsheepprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/bighorn_sheep"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(9)
        .biome("twilightforest:mushroom_forest")

    event.recipes.gtceu.twilightenergyconcentrator('giantprediction')
        .itemInputs(
            'kubejs:emptyprediction'
        )
        .itemOutputs(
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:twilightforest/giant"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(500)
        .circuit(10)
        .biome("twilightforest:thornlands")

})
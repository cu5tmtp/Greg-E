ServerEvents.recipes((event) =>{

    event.recipes.gtceu.bender('pelllettgtgfmvfofm')
        .itemInputs(
            'gtceu:empty_mold'
        )
        .itemOutputs(
            'kubejs:pelletmold'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .circuit(24)

    event.recipes.gtceu.forming_press('getthebrasspellet')
        .itemInputs(
            'gtceu:brass_ingot'
        )
        .itemOutputs(
            'gregecore:brass_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.forming_press('gettheamericiumpellet')
        .itemInputs(
            'gtceu:americium_ingot'
        )
        .itemOutputs(
            'gregecore:americium_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.forming_press('gettheneutroniumpellet')
        .itemInputs(
            'gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'gregecore:neutronium_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.extractor('getuhvcas')
        .itemInputs(
            '#gtceu:circuits/uhv'
        )
        .outputFluids(
            'kubejs:uhvcas 1000'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    event.recipes.gtceu.forming_press('getsideselector')
        .itemInputs(
            '#gtceu:circuits/uhv',
            'gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'avaritia:side_config_card'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    event.recipes.gtceu.assembler('getquantumaccel')
        .itemInputs(
            '#gtceu:circuits/uv',
            '8x advanced_ae:quantum_alloy'
        )
        .itemOutputs(
            'gregecore:quantum_accelerator'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.assembler('getserverrack')
        .itemInputs(
            '4x #gtceu:circuits/uv',
            '8x gtceu:stainless_steel_frame'
        )
        .itemOutputs(
            'gregecore:server_rack'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.assembler('getrocketcone')
        .itemInputs(
            '#gtceu:circuits/uv',
            '8x ad_astra:rocket_fin'
        )
        .inputFluids(
            'gtceu:helium 1000'
        )
        .itemOutputs(
            'gregecore:rocket_cone'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.compressor('withertokengettttt')
        .itemInputs(
            '64x gtceu:nether_star_block'
        )
        .itemOutputs(
            'kubejs:tomes/withertoken'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.compressor('gaiatokengettttt')
        .itemInputs(
            '64x botanicalextramachinery:malachite_ingot_block'
        )
        .itemOutputs(
            'kubejs:tomes/gaiatoken'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.compressor('chaostokengettttt')
        .itemInputs(
            '64x draconicevolution:dragon_heart'
        )
        .itemOutputs(
            'kubejs:tomes/chaostoken'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.compressor('dragontokengettttt')
        .itemInputs(
             'minecraft:dragon_head'
        )
        .itemOutputs(
            'kubejs:tomes/enderdragontoken'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:antimatter 100000'
        )
        .itemOutputs(
            'gtceu:antimatter_block'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)



})
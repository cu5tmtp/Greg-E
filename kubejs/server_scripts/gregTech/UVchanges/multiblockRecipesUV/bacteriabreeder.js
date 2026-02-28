ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:bacteriabreeder', 1),
        [
            ' A ',
            'ABA',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'gtceu:stem_cells',
            C: 'gtceu:reaction_safe_mixing_casing',
            E: 'gtceu:uv_machine_hull'
        }
    )

    for (let i = 1; i <= 13; i++) {

        let bacteria = `kubejs:bacterias/simplebacteria${i}`;
        event.recipes.gtceu.bacteriabreedercycle(`bacteriamultiplying${i}`)
            .notConsumable(bacteria)
            .notConsumable(bacteria)
            .itemOutputs(bacteria)
            .duration(500)
            .EUt(GTValues.VA[GTValues.UV]);
    }

    event.recipes.gtceu.bacteriabreeder('getsimple1simple2simple3')
        .itemInputs(
            'kubejs:bacterias/simplebacteria13'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria1', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria2', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria3', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get4with1and2')
        .itemInputs(
            'kubejs:bacterias/simplebacteria1',
            'kubejs:bacterias/simplebacteria2'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria4', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria1', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria2', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get5with1and3')
        .itemInputs(
            'kubejs:bacterias/simplebacteria1',
            'kubejs:bacterias/simplebacteria3'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria5', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria1', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria3', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get6with4and5')
        .itemInputs(
            'kubejs:bacterias/simplebacteria4',
            'kubejs:bacterias/simplebacteria5'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria6', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria4', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria5', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('getenergybacteriawith6and5')
        .itemInputs(
            'kubejs:bacterias/simplebacteria6',
            'kubejs:bacterias/simplebacteria5'
        )
        .chancedOutput('gregecore:energy_bacteria', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria6', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria5', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get7with3and6')
        .itemInputs(
            'kubejs:bacterias/simplebacteria3',
            'kubejs:bacterias/simplebacteria6'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria7', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria6', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria3', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get8with7and4')
        .itemInputs(
            'kubejs:bacterias/simplebacteria7',
            'kubejs:bacterias/simplebacteria4'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria8', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria7', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria4', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get9with8and6')
        .itemInputs(
            'kubejs:bacterias/simplebacteria8',
            'kubejs:bacterias/simplebacteria6'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria9', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria8', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria6', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('getspeedbacteriawith9and8')
        .itemInputs(
            'kubejs:bacterias/simplebacteria9',
            'kubejs:bacterias/simplebacteria8'
        )
        .chancedOutput('gregecore:speed_bacteria', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria9', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria8', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get10with9and3')
        .itemInputs(
            'kubejs:bacterias/simplebacteria9',
            'kubejs:bacterias/simplebacteria3'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria10', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria9', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria3', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get11with10and7')
        .itemInputs(
            'kubejs:bacterias/simplebacteria10',
            'kubejs:bacterias/simplebacteria7'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria11', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria10', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria7', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('get12with10and11')
        .itemInputs(
            'kubejs:bacterias/simplebacteria10',
            'kubejs:bacterias/simplebacteria11'
        )
        .chancedOutput('kubejs:bacterias/simplebacteria12', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria10', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria11', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bacteriabreeder('getparallelwith12and11')
        .itemInputs(
            'kubejs:bacterias/simplebacteria12',
            'kubejs:bacterias/simplebacteria11'
        )
        .chancedOutput('gregecore:parallel_bacteria', 100, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria12', 3000, 0)
        .chancedOutput('kubejs:bacterias/simplebacteria11', 6900, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV])

});
ItemEvents.rightClicked('kubejs:halloweensecret', event => {
    event.player.tell('§e§l kxgiy:qekrixmg_mvsr_fspx.C[4]')
})

ItemEvents.rightClicked('gtceu:magnetic_iron_bolt', event => {
    event.player.tell('§e§l tgxvf:grmb_hlwrfn_yrhfouzgv_wfhg.AT')
})

ItemEvents.rightClicked('gtceu:tiny_sodium_bisulfate_dust', event => {
    event.player.tell('§e§l shqrg:ucbp_szrohfbzwq_pufqhuh.VIG[MOON]')
})

ItemEvents.rightClicked('gtceu:good_electronic_circuit', event => {
    event.player.tell('§7Three ingredients. Three rows.')
    event.player.tell('§7The first above the second.')
    event.player.tell('§7The second above the third.')
})

ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('kubejs:infinity_oxygen_cell', 1),
        [
            'AAA',
            'BBB',
            'CCC'
        ],
        {
            A: 'gtceu:magnetic_iron_bolt',
            B: 'gtceu:tiny_sodium_bisulfate_dust',
            C: 'gtceu:good_electronic_circuit'
        }
    ).id('kubejs:secret_infinity_oxygen_cell')

})
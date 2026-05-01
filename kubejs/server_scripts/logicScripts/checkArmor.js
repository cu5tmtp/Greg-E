EntityEvents.spawned(event => {
    if (event.level.dimension == 'gregecore:fracture_dimension') {
        const player = event.entity
        
        if (!player.isPlayer()) return

        let hasChestplate = player.chestArmorItem.id == 'avaritia:infinity_chestplate'
        let hasHelmet = player.headArmorItem.id == 'avaritia:infinity_helmet'
        let hasBoots = player.feetArmorItem.id == 'avaritia:infinity_boots'
        let hasLeggings = player.legsArmorItem.id == 'avaritia:infinity_pants'

        if (hasChestplate && hasHelmet && hasBoots && hasLeggings) {
            player.tell(Text.green('Your armor survived the dimension rift.'))
        } else {
            player.attack(100000)
            player.tell(Text.red("Your armor didn't help you to survive in the dimension rift.")) 
        }
    }
})
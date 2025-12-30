<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'CONGÉLATEURS',
                'subcategories' => [
                    'Congélateur Coffre',
                    'Congélateur Double Battant',
                    'Congélateur Coffre Vitrine',
                    'Congélateur Vertical'
                ]
            ],
            [
                'name' => 'RÉFRIGÉRATEURS',
                'subcategories' => [
                    'Réfrigérateur Combiné',
                    'Réfrigérateur Américain',
                    'Réfrigérateur Double Battant',
                    'Réfrigérateur Vitrine'
                ]
            ],
            [
                'name' => 'CUISINIÈRES',
                'subcategories' => [
                    'Cuisinière Manuelle',
                    'Cuisinière Automatique',
                    'Cuisinière Électrique',
                    'Plaque À Gaz',
                    'Marmite Chauffante'
                ]
            ],
            [
                'name' => 'MACHINES À LAVER',
                'subcategories' => [
                    'Automatique',
                    'Semi-Automatique',
                    'Sèche-Linge',
                    'Machine Lavante Et Séchante'
                ]
            ],
            [
                'name' => 'CLIMATISEURS',
                'subcategories' => [
                    'Split Climatiseur',
                    'Climatiseur Portatif',
                    'Climatiseur Armoire',
                    'Ventilateurs',
                    'Refroidisseurs d\'air'
                ]
            ],
            [
                'name' => 'APPAREILS DE CUISSON',
                'subcategories' => [
                    'Micro-Ondes Et Fours',
                    'Friteuses',
                    'Autocuiseurs'
                ]
            ],
            [
                'name' => 'BLENDER ET HACHOIR',
                'subcategories' => [
                    'Blender',
                    'Hachoir'
                ]
            ],
            [
                'name' => 'APPAREILS DE PATISSERIE ET JUS',
                'subcategories' => [
                    'Mélangeur, Mixeur Et Batteur',
                    'Extracteur De Jus Et Presse Agrumes Électriques'
                ]
            ],
            [
                'name' => 'APPAREILS POUR PETIT DÉJ',
                'subcategories' => [
                    'Bouilloires & Cafétières',
                    'Grill Et Autres'
                ]
            ],
            [
                'name' => 'APPAREILS DE MÉNAGE',
                'subcategories' => [
                    'Fer À Répasser, À Vapeur Et À Sec',
                    'Central Vapeur Et Défroisseurs',
                    'Aspirateur Assisté Et Autonomes'
                ]
            ],
            [
                'name' => 'TÉLÉVISEURS',
                'subcategories' => [
                    'Téléviseurs Smart',
                    'Téléviseurs Numériques',
                    'Téléviseurs LED'
                ]
            ],
            [
                'name' => 'ÉLÉCTRICITÉ',
                'subcategories' => [
                    'Onduleurs Et Convertisseurs',
                    'Régulateurs De Tension'
                ]
            ],
            [
                'name' => 'AUDIO & HIFI',
                'subcategories' => [
                    'Home Cinéma',
                    'Baffles Et Barres De Son Bluetooth',
                    'Haut-Parleurs Et Woofers',
                    'Enceintes Bluetooth',
                    'Systèmes HIFI'
                ]
            ]
        ];

        foreach ($categories as $category) {
            $mainCategory = \App\Models\Category::create([
                'name' => $category['name'],
                'parent_id' => null
            ]);

            foreach ($category['subcategories'] as $subcategory) {
                \App\Models\Category::create([
                    'name' => $subcategory,
                    'parent_id' => $mainCategory->id
                ]);
            }
        }
    }
}

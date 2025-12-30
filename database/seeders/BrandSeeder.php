<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            [
                'name' => 'OSCAR',
            ],
            [
                'name' => 'INNOVA',
            ],
            [
                'name' => 'ROCH',
            ],
            [
                'name' => 'FIABTEC',
            ],
            [
                'name' => 'TCL',
            ],
            [
                'name' => 'BINATONE',
            ],
            [
                'name' => 'MIDEA',
            ],
            [
                'name' => 'OCEAN',
            ],
            [
                'name' => 'DELTA',
            ],
            [
                'name' => 'STAR-SAT',
            ],
            [
                'name' => 'LG',
            ],
            [
                'name' => 'HISENSE',
            ]
        ];

        foreach ($brands as $brand) {
            \App\Models\Brand::create($brand);
        }
    }
}

/*
  Warnings:

  - Added the required column `diamonds` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gear` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventory` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stats` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "diamonds" INTEGER NOT NULL,
ADD COLUMN     "gear" JSONB NOT NULL,
ADD COLUMN     "inventory" JSONB NOT NULL,
ADD COLUMN     "stats" JSONB NOT NULL;

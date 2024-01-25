CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" text,
	"sku" varchar(100) NOT NULL,
	"category_id" integer,
	"price" numeric(10, 2) NOT NULL,
	"discounted_price" numeric(10, 2),
	"quantity_in_stock" smallint NOT NULL,
	"weight" numeric(5, 2),
	"size" varchar(50),
	"color" varchar(50),
	"brand_id" integer,
	"rating" numeric(3, 2),
	"review_count" integer NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"additional_images" json,
	"tags" text,
	"date_added" date DEFAULT CURRENT_DATE NOT NULL,
	"last_update" date DEFAULT CURRENT_DATE NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"additional_details" json
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "sku_idx" ON "products" ("sku");
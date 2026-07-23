CREATE TABLE "percal_products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "percal_products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"codigo" varchar(20) NOT NULL,
	"fios" integer NOT NULL,
	"artigo" varchar(10) NOT NULL,
	"composicao" varchar(100) NOT NULL,
	"largura" varchar(50) NOT NULL,
	"imagemUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" text DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);

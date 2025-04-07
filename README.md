📌 Digital Subscriptions System

Dobrodošli v repozitoriju Digital Subscriptions System – mikrostoritvenega sistema za upravljanje digitalnih naročnin na revije. Sistem omogoča registracijo uporabnikov, upravljanje revij in naročnin, pri čemer sledi arhitekturnim načelom čiste arhitekture (Clean Architecture).

📖 Opis projekta
Ta projekt je sestavljen iz treh mikrostoritev in spletne aplikacije, ki služi kot uporabniški vmesnik:

# Uporabniki (services/uporabniki)
Upravljanje registracije, prijave in uporabniških podatkov.
Avtentikacija in avtorizacija uporabnikov.

# Revije (services/revije)
Upravljanje digitalnih revij (dodajanje, urejanje, brisanje).
Prikaz podrobnosti o posamezni reviji.

# Naročnine (services/narocnine)
Uporabniki lahko kupijo naročnino na izbrano revijo.
Upravljanje naročnin (aktivacija, podaljšanje, preklic).

# Spletna aplikacija (frontend/)
Uporabniški vmesnik za dostop do sistema.
Omogoča registracijo in prijavo, ogled revij, naročanje in upravljanje naročnin.

# Dokumentacija (docs/)
Opis arhitekture in tehnologij.

## 🛠️ Arhitektura in tehnološki sklad
## 🔸 Arhitekturna načela:
✔ Čista arhitektura (Clean Architecture): ločitev poslovne logike od infrastrukture.

✔ Mikrostoritve: vsaka storitev je neodvisna in komunicira prek API-jev.

✔ Ohlapna sklopljenost: spremembe v eni storitvi ne vplivajo na druge.

## 🔸 Tehnologije, ki jih bomo uporabili:

Backend: Node.js
Frontend: ...
Podatkovna baza: MongoDB
Avtentikacija: ...
API komunikacija: gRPC
Vodenje različic: Git + GitHub

```
DigitalSubscriptionsSystem
├─ .vs
│  ├─ DigitalSubscriptionsSystem
│  │  ├─ FileContentIndex
│  │  │  ├─ 01a0fb99-7e6e-405d-aba6-ced941006d11.vsidx
│  │  │  └─ 30213580-bf52-4f8c-b6e9-6f854690202b.vsidx
│  │  └─ v17
│  │     ├─ .wsuo
│  │     └─ DocumentLayout.json
│  ├─ slnx.sqlite
│  └─ VSWorkspaceState.json
├─ docs
│  └─ .txt
├─ frontend
│  └─ .txt
├─ README.md
└─ services
   ├─ narocnine
   │  ├─ .txt
   │  ├─ demo
   │  │  └─ target
   │  │     ├─ classes
   │  │     │  └─ com
   │  │     │     └─ example
   │  │     │        └─ narocnine
   │  │     │           └─ demo
   │  │     └─ test-classes
   │  │        └─ com
   │  │           └─ example
   │  │              └─ narocnine
   │  │                 └─ demo
   │  └─ 
   │     ├─ .mvn
   │     │  └─ wrapper
   │     │     └─ maven-wrapper.properties
   │     ├─ docker-compose.yml
   │     ├─ Dockerfile
   │     ├─ HELP.md
   │     ├─ mvnw
   │     ├─ mvnw.cmd
   │     ├─ pom.xml
   │     ├─ src
   │     │  ├─ main
   │     │  │  ├─ java
   │     │  │  │  └─ com
   │     │  │  │     └─ example
   │     │  │  │        └─ narocnine
   │     │  │  │           ├─ config
   │     │  │  │           │  └─ RabbitConfig.java
   │     │  │  │           ├─ controller
   │     │  │  │           │  ├─ MessageController.java
   │     │  │  │           │  └─ SubscriptionController.javanarocnine-service
   │     │  │  │           ├─ model
   │     │  │  │           │  └─ Subscription.java
   │     │  │  │           ├─ NarocnineServiceApplication.java
   │     │  │  │           ├─ repository
   │     │  │  │           │  └─ SubscriptionRepository.java
   │     │  │  │           └─ service
   │     │  │  │              ├─ MessageListener.java
   │     │  │  │              ├─ MessageProducer.java
   │     │  │  │              └─ SubscriptionService.java
   │     │  │  └─ resources
   │     │  │     ├─ application.properties
   │     │  │     ├─ static
   │     │  │     └─ templates
   │     │  └─ test
   │     │     └─ java
   │     │        └─ com
   │     │           └─ example
   │     │              └─ narocnine
   │     │                 ├─ controller
   │     │                 │  └─ MessageControllerTest.java
   │     │                 ├─ NarocnineServiceApplicationTests.java
   │     │                 └─ service
   │     │                    ├─ MessageListenerTest.java
   │     │                    └─ SubscriptionServiceTest.java
   │     └─ target
   │        ├─ classes
   │        │  ├─ application.properties
   │        │  └─ com
   │        │     └─ example
   │        │        └─ narocnine
   │        │           ├─ config
   │        │           │  └─ RabbitConfig.class
   │        │           ├─ controller
   │        │           │  ├─ MessageController.class
   │        │           │  └─ SubscriptionController.class
   │        │           ├─ model
   │        │           │  └─ Subscription.class
   │        │           ├─ NarocnineServiceApplication.class
   │        │           ├─ repository
   │        │           │  └─ SubscriptionRepository.class
   │        │           └─ service
   │        │              ├─ MessageListener.class
   │        │              ├─ MessageProducer.class
   │        │              └─ SubscriptionService.class
   │        ├─ generated-sources
   │        │  └─ annotations
   │        ├─ generated-test-sources
   │        │  └─ test-annotations
   │        ├─ maven-archiver
   │        │  └─ pom.properties
   │        ├─ maven-status
   │        │  └─ maven-compiler-plugin
   │        │     ├─ compile
   │        │     │  └─ default-compile
   │        │     │     ├─ createdFiles.lst
   │        │     │     └─ inputFiles.lst
   │        │     └─ testCompile
   │        │        └─ default-testCompile
   │        │           ├─ createdFiles.lst
   │        │           └─ inputFiles.lst
   │        ├─ narocnine-service-0.0.1-SNAPSHOT.jar
   │        ├─ narocnine-service-0.0.1-SNAPSHOT.jar.original
   │        ├─ surefire-reports
   │        │  ├─ com.example.narocnine.controller.MessageControllerTest.txt
   │        │  ├─ com.example.narocnine.controller.SubscriptionControllerTest.txt
   │        │  ├─ com.example.narocnine.NarocnineServiceApplicationTests.txt
   │        │  ├─ com.example.narocnine.service.MessageListenerTest.txt
   │        │  ├─ com.example.narocnine.service.SubscriptionServiceTest.txt
   │        │  ├─ TEST-com.example.narocnine.controller.MessageControllerTest.xml
   │        │  ├─ TEST-com.example.narocnine.controller.SubscriptionControllerTest.xml
   │        │  ├─ TEST-com.example.narocnine.NarocnineServiceApplicationTests.xml
   │        │  ├─ TEST-com.example.narocnine.service.MessageListenerTest.xml
   │        │  └─ TEST-com.example.narocnine.service.SubscriptionServiceTest.xml
   │        └─ test-classes
   │           └─ com
   │              └─ example
   │                 └─ narocnine
   │                    ├─ controller
   │                    │  └─ MessageControllerTest.class
   │                    ├─ NarocnineServiceApplicationTests.class
   │                    └─ service
   │                       ├─ MessageListenerTest.class
   │                       └─ SubscriptionServiceTest.class
   ├─ revije
   │  ├─ controllers
   │  │  └─ revijeController.js
   │  ├─ docker-compose.yml
   │  ├─ Dockerfile
   │  ├─ models
   │  │  └─ revija.js
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ revije.proto
   │  ├─ revijeController.log
   │  ├─ server.js
   │  ├─ server.log
   │  ├─ test
   │  │  └─ revije.test.js
   │  └─ testClient.js
   └─ uporabniki
      ├─ .dockerignore
      ├─ .pytest_cache
      │  ├─ CACHEDIR.TAG
      │  ├─ README.md
      │  └─ v
      │     └─ cache
      │        ├─ lastfailed
      │        ├─ nodeids
      │        └─ stepwise
      ├─ app.log
      ├─ app.py
      ├─ config.py
      ├─ data
      │  ├─ collection-0-848653156215324663.wt
      │  ├─ collection-0-89700125797455491.wt
      │  ├─ collection-2-848653156215324663.wt
      │  ├─ collection-4-848653156215324663.wt
      │  ├─ diagnostic.data
      │  │  ├─ metrics.2025-03-24T00-35-30Z-00000
      │  │  ├─ metrics.2025-03-24T00-37-47Z-00000
      │  │  ├─ metrics.2025-03-24T00-38-40Z-00000
      │  │  ├─ metrics.2025-03-24T00-59-42Z-00000
      │  │  ├─ metrics.2025-03-24T01-01-25Z-00000
      │  │  └─ metrics.2025-03-24T18-55-20Z-00000
      │  ├─ index-1-848653156215324663.wt
      │  ├─ index-1-89700125797455491.wt
      │  ├─ index-3-848653156215324663.wt
      │  ├─ index-5-848653156215324663.wt
      │  ├─ index-6-848653156215324663.wt
      │  ├─ journal
      │  │  ├─ WiredTigerLog.0000000006
      │  │  └─ WiredTigerPreplog.0000000001
      │  ├─ mongod.lock
      │  ├─ sizeStorer.wt
      │  ├─ storage.bson
      │  ├─ WiredTiger
      │  ├─ WiredTiger.lock
      │  ├─ WiredTiger.turtle
      │  ├─ WiredTiger.wt
      │  ├─ WiredTigerHS.wt
      │  └─ _mdb_catalog.wt
      ├─ docker-compose.yml
      ├─ Dockerfile
      ├─ models.py
      ├─ requirements.txt
      ├─ test_app.py
      ├─ venv
      │  ├─ Include
      │  ├─ Lib
      │  │  └─ site-packages
      │  │     ├─ aniso8601
      │  │     │  ├─ builders
      │  │     │  │  ├─ python.py
      │  │     │  │  ├─ tests
      │  │     │  │  │  ├─ test_init.py
      │  │     │  │  │  ├─ test_python.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ test_init.cpython-310.pyc
      │  │     │  │  │     ├─ test_python.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ python.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ compat.py
      │  │     │  ├─ date.py
      │  │     │  ├─ decimalfraction.py
      │  │     │  ├─ duration.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ interval.py
      │  │     │  ├─ resolution.py
      │  │     │  ├─ tests
      │  │     │  │  ├─ compat.py
      │  │     │  │  ├─ test_compat.py
      │  │     │  │  ├─ test_date.py
      │  │     │  │  ├─ test_decimalfraction.py
      │  │     │  │  ├─ test_duration.py
      │  │     │  │  ├─ test_init.py
      │  │     │  │  ├─ test_interval.py
      │  │     │  │  ├─ test_time.py
      │  │     │  │  ├─ test_timezone.py
      │  │     │  │  ├─ test_utcoffset.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ compat.cpython-310.pyc
      │  │     │  │     ├─ test_compat.cpython-310.pyc
      │  │     │  │     ├─ test_date.cpython-310.pyc
      │  │     │  │     ├─ test_decimalfraction.cpython-310.pyc
      │  │     │  │     ├─ test_duration.cpython-310.pyc
      │  │     │  │     ├─ test_init.cpython-310.pyc
      │  │     │  │     ├─ test_interval.cpython-310.pyc
      │  │     │  │     ├─ test_time.cpython-310.pyc
      │  │     │  │     ├─ test_timezone.cpython-310.pyc
      │  │     │  │     ├─ test_utcoffset.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ time.py
      │  │     │  ├─ timezone.py
      │  │     │  ├─ utcoffset.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ compat.cpython-310.pyc
      │  │     │     ├─ date.cpython-310.pyc
      │  │     │     ├─ decimalfraction.cpython-310.pyc
      │  │     │     ├─ duration.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ interval.cpython-310.pyc
      │  │     │     ├─ resolution.cpython-310.pyc
      │  │     │     ├─ time.cpython-310.pyc
      │  │     │     ├─ timezone.cpython-310.pyc
      │  │     │     ├─ utcoffset.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ aniso8601-10.0.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ attr
      │  │     │  ├─ converters.py
      │  │     │  ├─ converters.pyi
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ exceptions.pyi
      │  │     │  ├─ filters.py
      │  │     │  ├─ filters.pyi
      │  │     │  ├─ py.typed
      │  │     │  ├─ setters.py
      │  │     │  ├─ setters.pyi
      │  │     │  ├─ validators.py
      │  │     │  ├─ validators.pyi
      │  │     │  ├─ _cmp.py
      │  │     │  ├─ _cmp.pyi
      │  │     │  ├─ _compat.py
      │  │     │  ├─ _config.py
      │  │     │  ├─ _funcs.py
      │  │     │  ├─ _make.py
      │  │     │  ├─ _next_gen.py
      │  │     │  ├─ _typing_compat.pyi
      │  │     │  ├─ _version_info.py
      │  │     │  ├─ _version_info.pyi
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __init__.pyi
      │  │     │  └─ __pycache__
      │  │     │     ├─ converters.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ filters.cpython-310.pyc
      │  │     │     ├─ setters.cpython-310.pyc
      │  │     │     ├─ validators.cpython-310.pyc
      │  │     │     ├─ _cmp.cpython-310.pyc
      │  │     │     ├─ _compat.cpython-310.pyc
      │  │     │     ├─ _config.cpython-310.pyc
      │  │     │     ├─ _funcs.cpython-310.pyc
      │  │     │     ├─ _make.cpython-310.pyc
      │  │     │     ├─ _next_gen.cpython-310.pyc
      │  │     │     ├─ _version_info.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ attrs
      │  │     │  ├─ converters.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ filters.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ setters.py
      │  │     │  ├─ validators.py
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __init__.pyi
      │  │     │  └─ __pycache__
      │  │     │     ├─ converters.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ filters.cpython-310.pyc
      │  │     │     ├─ setters.cpython-310.pyc
      │  │     │     ├─ validators.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ attrs-25.3.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ bcrypt
      │  │     │  ├─ py.typed
      │  │     │  ├─ _bcrypt.pyd
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __init__.pyi
      │  │     │  └─ __pycache__
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ bcrypt-4.3.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ blinker
      │  │     │  ├─ base.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ _utilities.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ base.cpython-310.pyc
      │  │     │     ├─ _utilities.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ blinker-1.9.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ bson
      │  │     │  ├─ binary.py
      │  │     │  ├─ bson-endian.h
      │  │     │  ├─ buffer.c
      │  │     │  ├─ buffer.h
      │  │     │  ├─ code.py
      │  │     │  ├─ codec_options.py
      │  │     │  ├─ datetime_ms.py
      │  │     │  ├─ dbref.py
      │  │     │  ├─ decimal128.py
      │  │     │  ├─ errors.py
      │  │     │  ├─ int64.py
      │  │     │  ├─ json_util.py
      │  │     │  ├─ max_key.py
      │  │     │  ├─ min_key.py
      │  │     │  ├─ objectid.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ raw_bson.py
      │  │     │  ├─ regex.py
      │  │     │  ├─ son.py
      │  │     │  ├─ time64.c
      │  │     │  ├─ time64.h
      │  │     │  ├─ time64_config.h
      │  │     │  ├─ time64_limits.h
      │  │     │  ├─ timestamp.py
      │  │     │  ├─ typings.py
      │  │     │  ├─ tz_util.py
      │  │     │  ├─ _cbson.cp310-win_amd64.pyd
      │  │     │  ├─ _cbson.cp39-win_amd64.pyd
      │  │     │  ├─ _cbsonmodule.c
      │  │     │  ├─ _cbsonmodule.h
      │  │     │  ├─ _helpers.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ binary.cpython-310.pyc
      │  │     │     ├─ code.cpython-310.pyc
      │  │     │     ├─ codec_options.cpython-310.pyc
      │  │     │     ├─ datetime_ms.cpython-310.pyc
      │  │     │     ├─ dbref.cpython-310.pyc
      │  │     │     ├─ decimal128.cpython-310.pyc
      │  │     │     ├─ errors.cpython-310.pyc
      │  │     │     ├─ int64.cpython-310.pyc
      │  │     │     ├─ json_util.cpython-310.pyc
      │  │     │     ├─ max_key.cpython-310.pyc
      │  │     │     ├─ min_key.cpython-310.pyc
      │  │     │     ├─ objectid.cpython-310.pyc
      │  │     │     ├─ raw_bson.cpython-310.pyc
      │  │     │     ├─ regex.cpython-310.pyc
      │  │     │     ├─ son.cpython-310.pyc
      │  │     │     ├─ timestamp.cpython-310.pyc
      │  │     │     ├─ typings.cpython-310.pyc
      │  │     │     ├─ tz_util.cpython-310.pyc
      │  │     │     ├─ _helpers.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ click
      │  │     │  ├─ core.py
      │  │     │  ├─ decorators.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ formatting.py
      │  │     │  ├─ globals.py
      │  │     │  ├─ parser.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ shell_completion.py
      │  │     │  ├─ termui.py
      │  │     │  ├─ testing.py
      │  │     │  ├─ types.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ _compat.py
      │  │     │  ├─ _termui_impl.py
      │  │     │  ├─ _textwrap.py
      │  │     │  ├─ _winconsole.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ core.cpython-310.pyc
      │  │     │     ├─ decorators.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ formatting.cpython-310.pyc
      │  │     │     ├─ globals.cpython-310.pyc
      │  │     │     ├─ parser.cpython-310.pyc
      │  │     │     ├─ shell_completion.cpython-310.pyc
      │  │     │     ├─ termui.cpython-310.pyc
      │  │     │     ├─ testing.cpython-310.pyc
      │  │     │     ├─ types.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ _compat.cpython-310.pyc
      │  │     │     ├─ _termui_impl.cpython-310.pyc
      │  │     │     ├─ _textwrap.cpython-310.pyc
      │  │     │     ├─ _winconsole.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ click-8.1.8.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ colorama
      │  │     │  ├─ ansi.py
      │  │     │  ├─ ansitowin32.py
      │  │     │  ├─ initialise.py
      │  │     │  ├─ tests
      │  │     │  │  ├─ ansitowin32_test.py
      │  │     │  │  ├─ ansi_test.py
      │  │     │  │  ├─ initialise_test.py
      │  │     │  │  ├─ isatty_test.py
      │  │     │  │  ├─ utils.py
      │  │     │  │  ├─ winterm_test.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ ansitowin32_test.cpython-310.pyc
      │  │     │  │     ├─ ansi_test.cpython-310.pyc
      │  │     │  │     ├─ initialise_test.cpython-310.pyc
      │  │     │  │     ├─ isatty_test.cpython-310.pyc
      │  │     │  │     ├─ utils.cpython-310.pyc
      │  │     │  │     ├─ winterm_test.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ win32.py
      │  │     │  ├─ winterm.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ ansi.cpython-310.pyc
      │  │     │     ├─ ansitowin32.cpython-310.pyc
      │  │     │     ├─ initialise.cpython-310.pyc
      │  │     │     ├─ win32.cpython-310.pyc
      │  │     │     ├─ winterm.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ colorama-0.4.6.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ distutils-precedence.pth
      │  │     ├─ dns
      │  │     │  ├─ asyncbackend.py
      │  │     │  ├─ asyncquery.py
      │  │     │  ├─ asyncresolver.py
      │  │     │  ├─ dnssec.py
      │  │     │  ├─ dnssecalgs
      │  │     │  │  ├─ base.py
      │  │     │  │  ├─ cryptography.py
      │  │     │  │  ├─ dsa.py
      │  │     │  │  ├─ ecdsa.py
      │  │     │  │  ├─ eddsa.py
      │  │     │  │  ├─ rsa.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ base.cpython-310.pyc
      │  │     │  │     ├─ cryptography.cpython-310.pyc
      │  │     │  │     ├─ dsa.cpython-310.pyc
      │  │     │  │     ├─ ecdsa.cpython-310.pyc
      │  │     │  │     ├─ eddsa.cpython-310.pyc
      │  │     │  │     ├─ rsa.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ dnssectypes.py
      │  │     │  ├─ e164.py
      │  │     │  ├─ edns.py
      │  │     │  ├─ entropy.py
      │  │     │  ├─ enum.py
      │  │     │  ├─ exception.py
      │  │     │  ├─ flags.py
      │  │     │  ├─ grange.py
      │  │     │  ├─ immutable.py
      │  │     │  ├─ inet.py
      │  │     │  ├─ ipv4.py
      │  │     │  ├─ ipv6.py
      │  │     │  ├─ message.py
      │  │     │  ├─ name.py
      │  │     │  ├─ namedict.py
      │  │     │  ├─ nameserver.py
      │  │     │  ├─ node.py
      │  │     │  ├─ opcode.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ query.py
      │  │     │  ├─ quic
      │  │     │  │  ├─ _asyncio.py
      │  │     │  │  ├─ _common.py
      │  │     │  │  ├─ _sync.py
      │  │     │  │  ├─ _trio.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ _asyncio.cpython-310.pyc
      │  │     │  │     ├─ _common.cpython-310.pyc
      │  │     │  │     ├─ _sync.cpython-310.pyc
      │  │     │  │     ├─ _trio.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ rcode.py
      │  │     │  ├─ rdata.py
      │  │     │  ├─ rdataclass.py
      │  │     │  ├─ rdataset.py
      │  │     │  ├─ rdatatype.py
      │  │     │  ├─ rdtypes
      │  │     │  │  ├─ ANY
      │  │     │  │  │  ├─ AFSDB.py
      │  │     │  │  │  ├─ AMTRELAY.py
      │  │     │  │  │  ├─ AVC.py
      │  │     │  │  │  ├─ CAA.py
      │  │     │  │  │  ├─ CDNSKEY.py
      │  │     │  │  │  ├─ CDS.py
      │  │     │  │  │  ├─ CERT.py
      │  │     │  │  │  ├─ CNAME.py
      │  │     │  │  │  ├─ CSYNC.py
      │  │     │  │  │  ├─ DLV.py
      │  │     │  │  │  ├─ DNAME.py
      │  │     │  │  │  ├─ DNSKEY.py
      │  │     │  │  │  ├─ DS.py
      │  │     │  │  │  ├─ EUI48.py
      │  │     │  │  │  ├─ EUI64.py
      │  │     │  │  │  ├─ GPOS.py
      │  │     │  │  │  ├─ HINFO.py
      │  │     │  │  │  ├─ HIP.py
      │  │     │  │  │  ├─ ISDN.py
      │  │     │  │  │  ├─ L32.py
      │  │     │  │  │  ├─ L64.py
      │  │     │  │  │  ├─ LOC.py
      │  │     │  │  │  ├─ LP.py
      │  │     │  │  │  ├─ MX.py
      │  │     │  │  │  ├─ NID.py
      │  │     │  │  │  ├─ NINFO.py
      │  │     │  │  │  ├─ NS.py
      │  │     │  │  │  ├─ NSEC.py
      │  │     │  │  │  ├─ NSEC3.py
      │  │     │  │  │  ├─ NSEC3PARAM.py
      │  │     │  │  │  ├─ OPENPGPKEY.py
      │  │     │  │  │  ├─ OPT.py
      │  │     │  │  │  ├─ PTR.py
      │  │     │  │  │  ├─ RESINFO.py
      │  │     │  │  │  ├─ RP.py
      │  │     │  │  │  ├─ RRSIG.py
      │  │     │  │  │  ├─ RT.py
      │  │     │  │  │  ├─ SMIMEA.py
      │  │     │  │  │  ├─ SOA.py
      │  │     │  │  │  ├─ SPF.py
      │  │     │  │  │  ├─ SSHFP.py
      │  │     │  │  │  ├─ TKEY.py
      │  │     │  │  │  ├─ TLSA.py
      │  │     │  │  │  ├─ TSIG.py
      │  │     │  │  │  ├─ TXT.py
      │  │     │  │  │  ├─ URI.py
      │  │     │  │  │  ├─ WALLET.py
      │  │     │  │  │  ├─ X25.py
      │  │     │  │  │  ├─ ZONEMD.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ AFSDB.cpython-310.pyc
      │  │     │  │  │     ├─ AMTRELAY.cpython-310.pyc
      │  │     │  │  │     ├─ AVC.cpython-310.pyc
      │  │     │  │  │     ├─ CAA.cpython-310.pyc
      │  │     │  │  │     ├─ CDNSKEY.cpython-310.pyc
      │  │     │  │  │     ├─ CDS.cpython-310.pyc
      │  │     │  │  │     ├─ CERT.cpython-310.pyc
      │  │     │  │  │     ├─ CNAME.cpython-310.pyc
      │  │     │  │  │     ├─ CSYNC.cpython-310.pyc
      │  │     │  │  │     ├─ DLV.cpython-310.pyc
      │  │     │  │  │     ├─ DNAME.cpython-310.pyc
      │  │     │  │  │     ├─ DNSKEY.cpython-310.pyc
      │  │     │  │  │     ├─ DS.cpython-310.pyc
      │  │     │  │  │     ├─ EUI48.cpython-310.pyc
      │  │     │  │  │     ├─ EUI64.cpython-310.pyc
      │  │     │  │  │     ├─ GPOS.cpython-310.pyc
      │  │     │  │  │     ├─ HINFO.cpython-310.pyc
      │  │     │  │  │     ├─ HIP.cpython-310.pyc
      │  │     │  │  │     ├─ ISDN.cpython-310.pyc
      │  │     │  │  │     ├─ L32.cpython-310.pyc
      │  │     │  │  │     ├─ L64.cpython-310.pyc
      │  │     │  │  │     ├─ LOC.cpython-310.pyc
      │  │     │  │  │     ├─ LP.cpython-310.pyc
      │  │     │  │  │     ├─ MX.cpython-310.pyc
      │  │     │  │  │     ├─ NID.cpython-310.pyc
      │  │     │  │  │     ├─ NINFO.cpython-310.pyc
      │  │     │  │  │     ├─ NS.cpython-310.pyc
      │  │     │  │  │     ├─ NSEC.cpython-310.pyc
      │  │     │  │  │     ├─ NSEC3.cpython-310.pyc
      │  │     │  │  │     ├─ NSEC3PARAM.cpython-310.pyc
      │  │     │  │  │     ├─ OPENPGPKEY.cpython-310.pyc
      │  │     │  │  │     ├─ OPT.cpython-310.pyc
      │  │     │  │  │     ├─ PTR.cpython-310.pyc
      │  │     │  │  │     ├─ RESINFO.cpython-310.pyc
      │  │     │  │  │     ├─ RP.cpython-310.pyc
      │  │     │  │  │     ├─ RRSIG.cpython-310.pyc
      │  │     │  │  │     ├─ RT.cpython-310.pyc
      │  │     │  │  │     ├─ SMIMEA.cpython-310.pyc
      │  │     │  │  │     ├─ SOA.cpython-310.pyc
      │  │     │  │  │     ├─ SPF.cpython-310.pyc
      │  │     │  │  │     ├─ SSHFP.cpython-310.pyc
      │  │     │  │  │     ├─ TKEY.cpython-310.pyc
      │  │     │  │  │     ├─ TLSA.cpython-310.pyc
      │  │     │  │  │     ├─ TSIG.cpython-310.pyc
      │  │     │  │  │     ├─ TXT.cpython-310.pyc
      │  │     │  │  │     ├─ URI.cpython-310.pyc
      │  │     │  │  │     ├─ WALLET.cpython-310.pyc
      │  │     │  │  │     ├─ X25.cpython-310.pyc
      │  │     │  │  │     ├─ ZONEMD.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ CH
      │  │     │  │  │  ├─ A.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ A.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ dnskeybase.py
      │  │     │  │  ├─ dsbase.py
      │  │     │  │  ├─ euibase.py
      │  │     │  │  ├─ IN
      │  │     │  │  │  ├─ A.py
      │  │     │  │  │  ├─ AAAA.py
      │  │     │  │  │  ├─ APL.py
      │  │     │  │  │  ├─ DHCID.py
      │  │     │  │  │  ├─ HTTPS.py
      │  │     │  │  │  ├─ IPSECKEY.py
      │  │     │  │  │  ├─ KX.py
      │  │     │  │  │  ├─ NAPTR.py
      │  │     │  │  │  ├─ NSAP.py
      │  │     │  │  │  ├─ NSAP_PTR.py
      │  │     │  │  │  ├─ PX.py
      │  │     │  │  │  ├─ SRV.py
      │  │     │  │  │  ├─ SVCB.py
      │  │     │  │  │  ├─ WKS.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ A.cpython-310.pyc
      │  │     │  │  │     ├─ AAAA.cpython-310.pyc
      │  │     │  │  │     ├─ APL.cpython-310.pyc
      │  │     │  │  │     ├─ DHCID.cpython-310.pyc
      │  │     │  │  │     ├─ HTTPS.cpython-310.pyc
      │  │     │  │  │     ├─ IPSECKEY.cpython-310.pyc
      │  │     │  │  │     ├─ KX.cpython-310.pyc
      │  │     │  │  │     ├─ NAPTR.cpython-310.pyc
      │  │     │  │  │     ├─ NSAP.cpython-310.pyc
      │  │     │  │  │     ├─ NSAP_PTR.cpython-310.pyc
      │  │     │  │  │     ├─ PX.cpython-310.pyc
      │  │     │  │  │     ├─ SRV.cpython-310.pyc
      │  │     │  │  │     ├─ SVCB.cpython-310.pyc
      │  │     │  │  │     ├─ WKS.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ mxbase.py
      │  │     │  │  ├─ nsbase.py
      │  │     │  │  ├─ svcbbase.py
      │  │     │  │  ├─ tlsabase.py
      │  │     │  │  ├─ txtbase.py
      │  │     │  │  ├─ util.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ dnskeybase.cpython-310.pyc
      │  │     │  │     ├─ dsbase.cpython-310.pyc
      │  │     │  │     ├─ euibase.cpython-310.pyc
      │  │     │  │     ├─ mxbase.cpython-310.pyc
      │  │     │  │     ├─ nsbase.cpython-310.pyc
      │  │     │  │     ├─ svcbbase.cpython-310.pyc
      │  │     │  │     ├─ tlsabase.cpython-310.pyc
      │  │     │  │     ├─ txtbase.cpython-310.pyc
      │  │     │  │     ├─ util.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ renderer.py
      │  │     │  ├─ resolver.py
      │  │     │  ├─ reversename.py
      │  │     │  ├─ rrset.py
      │  │     │  ├─ serial.py
      │  │     │  ├─ set.py
      │  │     │  ├─ tokenizer.py
      │  │     │  ├─ transaction.py
      │  │     │  ├─ tsig.py
      │  │     │  ├─ tsigkeyring.py
      │  │     │  ├─ ttl.py
      │  │     │  ├─ update.py
      │  │     │  ├─ version.py
      │  │     │  ├─ versioned.py
      │  │     │  ├─ win32util.py
      │  │     │  ├─ wire.py
      │  │     │  ├─ xfr.py
      │  │     │  ├─ zone.py
      │  │     │  ├─ zonefile.py
      │  │     │  ├─ zonetypes.py
      │  │     │  ├─ _asyncbackend.py
      │  │     │  ├─ _asyncio_backend.py
      │  │     │  ├─ _ddr.py
      │  │     │  ├─ _features.py
      │  │     │  ├─ _immutable_ctx.py
      │  │     │  ├─ _trio_backend.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ asyncbackend.cpython-310.pyc
      │  │     │     ├─ asyncquery.cpython-310.pyc
      │  │     │     ├─ asyncresolver.cpython-310.pyc
      │  │     │     ├─ dnssec.cpython-310.pyc
      │  │     │     ├─ dnssectypes.cpython-310.pyc
      │  │     │     ├─ e164.cpython-310.pyc
      │  │     │     ├─ edns.cpython-310.pyc
      │  │     │     ├─ entropy.cpython-310.pyc
      │  │     │     ├─ enum.cpython-310.pyc
      │  │     │     ├─ exception.cpython-310.pyc
      │  │     │     ├─ flags.cpython-310.pyc
      │  │     │     ├─ grange.cpython-310.pyc
      │  │     │     ├─ immutable.cpython-310.pyc
      │  │     │     ├─ inet.cpython-310.pyc
      │  │     │     ├─ ipv4.cpython-310.pyc
      │  │     │     ├─ ipv6.cpython-310.pyc
      │  │     │     ├─ message.cpython-310.pyc
      │  │     │     ├─ name.cpython-310.pyc
      │  │     │     ├─ namedict.cpython-310.pyc
      │  │     │     ├─ nameserver.cpython-310.pyc
      │  │     │     ├─ node.cpython-310.pyc
      │  │     │     ├─ opcode.cpython-310.pyc
      │  │     │     ├─ query.cpython-310.pyc
      │  │     │     ├─ rcode.cpython-310.pyc
      │  │     │     ├─ rdata.cpython-310.pyc
      │  │     │     ├─ rdataclass.cpython-310.pyc
      │  │     │     ├─ rdataset.cpython-310.pyc
      │  │     │     ├─ rdatatype.cpython-310.pyc
      │  │     │     ├─ renderer.cpython-310.pyc
      │  │     │     ├─ resolver.cpython-310.pyc
      │  │     │     ├─ reversename.cpython-310.pyc
      │  │     │     ├─ rrset.cpython-310.pyc
      │  │     │     ├─ serial.cpython-310.pyc
      │  │     │     ├─ set.cpython-310.pyc
      │  │     │     ├─ tokenizer.cpython-310.pyc
      │  │     │     ├─ transaction.cpython-310.pyc
      │  │     │     ├─ tsig.cpython-310.pyc
      │  │     │     ├─ tsigkeyring.cpython-310.pyc
      │  │     │     ├─ ttl.cpython-310.pyc
      │  │     │     ├─ update.cpython-310.pyc
      │  │     │     ├─ version.cpython-310.pyc
      │  │     │     ├─ versioned.cpython-310.pyc
      │  │     │     ├─ win32util.cpython-310.pyc
      │  │     │     ├─ wire.cpython-310.pyc
      │  │     │     ├─ xfr.cpython-310.pyc
      │  │     │     ├─ zone.cpython-310.pyc
      │  │     │     ├─ zonefile.cpython-310.pyc
      │  │     │     ├─ zonetypes.cpython-310.pyc
      │  │     │     ├─ _asyncbackend.cpython-310.pyc
      │  │     │     ├─ _asyncio_backend.cpython-310.pyc
      │  │     │     ├─ _ddr.cpython-310.pyc
      │  │     │     ├─ _features.cpython-310.pyc
      │  │     │     ├─ _immutable_ctx.cpython-310.pyc
      │  │     │     ├─ _trio_backend.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ dnspython-2.7.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ exceptiongroup
      │  │     │  ├─ py.typed
      │  │     │  ├─ _catch.py
      │  │     │  ├─ _exceptions.py
      │  │     │  ├─ _formatting.py
      │  │     │  ├─ _suppress.py
      │  │     │  ├─ _version.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ _catch.cpython-310.pyc
      │  │     │     ├─ _exceptions.cpython-310.pyc
      │  │     │     ├─ _formatting.cpython-310.pyc
      │  │     │     ├─ _suppress.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ exceptiongroup-1.2.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ flasgger
      │  │     │  ├─ .DS_Store
      │  │     │  ├─ base.py
      │  │     │  ├─ commands.py
      │  │     │  ├─ compatible.py
      │  │     │  ├─ constants.py
      │  │     │  ├─ marshmallow_apispec.py
      │  │     │  ├─ ui2
      │  │     │  │  ├─ static
      │  │     │  │  │  ├─ css
      │  │     │  │  │  │  ├─ print.css
      │  │     │  │  │  │  ├─ reset.css
      │  │     │  │  │  │  ├─ screen.css
      │  │     │  │  │  │  ├─ style.css
      │  │     │  │  │  │  └─ typography.css
      │  │     │  │  │  ├─ fonts
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-700.eot
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-700.svg
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-700.ttf
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-700.woff
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-700.woff2
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-regular.eot
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-regular.svg
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-regular.ttf
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-regular.woff
      │  │     │  │  │  │  ├─ droid-sans-v6-latin-regular.woff2
      │  │     │  │  │  │  ├─ DroidSans-Bold.ttf
      │  │     │  │  │  │  └─ DroidSans.ttf
      │  │     │  │  │  ├─ images
      │  │     │  │  │  │  ├─ collapse.gif
      │  │     │  │  │  │  ├─ expand.gif
      │  │     │  │  │  │  ├─ explorer_icons.png
      │  │     │  │  │  │  ├─ favicon-16x16.png
      │  │     │  │  │  │  ├─ favicon-32x32.png
      │  │     │  │  │  │  ├─ favicon.ico
      │  │     │  │  │  │  ├─ logo_small.png
      │  │     │  │  │  │  ├─ pet_store_api.png
      │  │     │  │  │  │  ├─ throbber.gif
      │  │     │  │  │  │  └─ wordnik_api.png
      │  │     │  │  │  ├─ index.html
      │  │     │  │  │  ├─ lang
      │  │     │  │  │  │  ├─ ca.js
      │  │     │  │  │  │  ├─ el.js
      │  │     │  │  │  │  ├─ en.js
      │  │     │  │  │  │  ├─ es.js
      │  │     │  │  │  │  ├─ fr.js
      │  │     │  │  │  │  ├─ geo.js
      │  │     │  │  │  │  ├─ it.js
      │  │     │  │  │  │  ├─ ja.js
      │  │     │  │  │  │  ├─ ko-kr.js
      │  │     │  │  │  │  ├─ pl.js
      │  │     │  │  │  │  ├─ pt.js
      │  │     │  │  │  │  ├─ ru.js
      │  │     │  │  │  │  ├─ tr.js
      │  │     │  │  │  │  ├─ translator.js
      │  │     │  │  │  │  └─ zh-cn.js
      │  │     │  │  │  ├─ lib
      │  │     │  │  │  │  ├─ backbone-min.js
      │  │     │  │  │  │  ├─ es5-shim.js
      │  │     │  │  │  │  ├─ handlebars-4.0.5.js
      │  │     │  │  │  │  ├─ highlight.9.1.0.pack.js
      │  │     │  │  │  │  ├─ highlight.9.1.0.pack_extended.js
      │  │     │  │  │  │  ├─ jquery-1.8.0.min.js
      │  │     │  │  │  │  ├─ jquery.ba-bbq.min.js
      │  │     │  │  │  │  ├─ jquery.slideto.min.js
      │  │     │  │  │  │  ├─ jquery.wiggle.min.js
      │  │     │  │  │  │  ├─ js-yaml.min.js
      │  │     │  │  │  │  ├─ jsoneditor.min.js
      │  │     │  │  │  │  ├─ lodash.min.js
      │  │     │  │  │  │  ├─ marked.js
      │  │     │  │  │  │  ├─ object-assign-pollyfill.js
      │  │     │  │  │  │  ├─ sanitize-html.min.js
      │  │     │  │  │  │  └─ swagger-oauth.js
      │  │     │  │  │  ├─ o2c.html
      │  │     │  │  │  ├─ swagger-ui.js
      │  │     │  │  │  └─ swagger-ui.min.js
      │  │     │  │  └─ templates
      │  │     │  │     └─ flasgger
      │  │     │  │        ├─ index.html
      │  │     │  │        ├─ index_old.html
      │  │     │  │        └─ o2c.html
      │  │     │  ├─ ui3
      │  │     │  │  ├─ static
      │  │     │  │  │  ├─ favicon-16x16.png
      │  │     │  │  │  ├─ favicon-32x32.png
      │  │     │  │  │  ├─ lib
      │  │     │  │  │  │  ├─ jquery.min.js
      │  │     │  │  │  │  └─ jquery.min.map
      │  │     │  │  │  ├─ swagger-ui-bundle.js
      │  │     │  │  │  ├─ swagger-ui-bundle.js.map
      │  │     │  │  │  ├─ swagger-ui-standalone-preset.js
      │  │     │  │  │  ├─ swagger-ui-standalone-preset.js.map
      │  │     │  │  │  ├─ swagger-ui.css
      │  │     │  │  │  ├─ swagger-ui.css.map
      │  │     │  │  │  ├─ swagger-ui.js
      │  │     │  │  │  └─ swagger-ui.js.map
      │  │     │  │  └─ templates
      │  │     │  │     └─ flasgger
      │  │     │  │        ├─ body_scripts.html
      │  │     │  │        ├─ custom_head.html
      │  │     │  │        ├─ footer.html
      │  │     │  │        ├─ head.html
      │  │     │  │        ├─ index.html
      │  │     │  │        ├─ oauth2-redirect.html
      │  │     │  │        ├─ swagger.html
      │  │     │  │        └─ top.html
      │  │     │  ├─ utils.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ base.cpython-310.pyc
      │  │     │     ├─ commands.cpython-310.pyc
      │  │     │     ├─ compatible.cpython-310.pyc
      │  │     │     ├─ constants.cpython-310.pyc
      │  │     │     ├─ marshmallow_apispec.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ flasgger-0.9.7.1-py3.10.egg-info
      │  │     │  ├─ dependency_links.txt
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ installed-files.txt
      │  │     │  ├─ not-zip-safe
      │  │     │  ├─ PKG-INFO
      │  │     │  ├─ requires.txt
      │  │     │  ├─ SOURCES.txt
      │  │     │  └─ top_level.txt
      │  │     ├─ flask
      │  │     │  ├─ app.py
      │  │     │  ├─ blueprints.py
      │  │     │  ├─ cli.py
      │  │     │  ├─ config.py
      │  │     │  ├─ ctx.py
      │  │     │  ├─ debughelpers.py
      │  │     │  ├─ globals.py
      │  │     │  ├─ helpers.py
      │  │     │  ├─ json
      │  │     │  │  ├─ provider.py
      │  │     │  │  ├─ tag.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ provider.cpython-310.pyc
      │  │     │  │     ├─ tag.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ logging.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ sansio
      │  │     │  │  ├─ app.py
      │  │     │  │  ├─ blueprints.py
      │  │     │  │  ├─ README.md
      │  │     │  │  ├─ scaffold.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ app.cpython-310.pyc
      │  │     │  │     ├─ blueprints.cpython-310.pyc
      │  │     │  │     └─ scaffold.cpython-310.pyc
      │  │     │  ├─ sessions.py
      │  │     │  ├─ signals.py
      │  │     │  ├─ templating.py
      │  │     │  ├─ testing.py
      │  │     │  ├─ typing.py
      │  │     │  ├─ views.py
      │  │     │  ├─ wrappers.py
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __main__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ app.cpython-310.pyc
      │  │     │     ├─ blueprints.cpython-310.pyc
      │  │     │     ├─ cli.cpython-310.pyc
      │  │     │     ├─ config.cpython-310.pyc
      │  │     │     ├─ ctx.cpython-310.pyc
      │  │     │     ├─ debughelpers.cpython-310.pyc
      │  │     │     ├─ globals.cpython-310.pyc
      │  │     │     ├─ helpers.cpython-310.pyc
      │  │     │     ├─ logging.cpython-310.pyc
      │  │     │     ├─ sessions.cpython-310.pyc
      │  │     │     ├─ signals.cpython-310.pyc
      │  │     │     ├─ templating.cpython-310.pyc
      │  │     │     ├─ testing.cpython-310.pyc
      │  │     │     ├─ typing.cpython-310.pyc
      │  │     │     ├─ views.cpython-310.pyc
      │  │     │     ├─ wrappers.cpython-310.pyc
      │  │     │     ├─ __init__.cpython-310.pyc
      │  │     │     └─ __main__.cpython-310.pyc
      │  │     ├─ flask-3.1.0.dist-info
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  └─ WHEEL
      │  │     ├─ flask_pymongo
      │  │     │  ├─ helpers.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ wrappers.py
      │  │     │  ├─ _version.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ helpers.cpython-310.pyc
      │  │     │     ├─ wrappers.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ flask_pymongo-3.0.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  └─ WHEEL
      │  │     ├─ flask_restplus
      │  │     │  ├─ api.py
      │  │     │  ├─ apidoc.py
      │  │     │  ├─ cors.py
      │  │     │  ├─ errors.py
      │  │     │  ├─ fields.py
      │  │     │  ├─ inputs.py
      │  │     │  ├─ marshalling.py
      │  │     │  ├─ mask.py
      │  │     │  ├─ model.py
      │  │     │  ├─ namespace.py
      │  │     │  ├─ postman.py
      │  │     │  ├─ representations.py
      │  │     │  ├─ reqparse.py
      │  │     │  ├─ resource.py
      │  │     │  ├─ schemas
      │  │     │  │  ├─ oas-2.0.json
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ specs.py
      │  │     │  ├─ static
      │  │     │  │  ├─ droid-sans.css
      │  │     │  │  ├─ favicon-16x16.png
      │  │     │  │  ├─ favicon-32x32.png
      │  │     │  │  ├─ files
      │  │     │  │  │  ├─ .npmignore
      │  │     │  │  │  ├─ droid-sans-latin-400.woff
      │  │     │  │  │  ├─ droid-sans-latin-400.woff2
      │  │     │  │  │  ├─ droid-sans-latin-700.woff
      │  │     │  │  │  └─ droid-sans-latin-700.woff2
      │  │     │  │  ├─ oauth2-redirect.html
      │  │     │  │  ├─ swagger-ui-bundle.js
      │  │     │  │  ├─ swagger-ui-bundle.js.map
      │  │     │  │  ├─ swagger-ui-standalone-preset.js
      │  │     │  │  ├─ swagger-ui-standalone-preset.js.map
      │  │     │  │  ├─ swagger-ui.css
      │  │     │  │  ├─ swagger-ui.css.map
      │  │     │  │  ├─ swagger-ui.js
      │  │     │  │  └─ swagger-ui.js.map
      │  │     │  ├─ swagger.py
      │  │     │  ├─ templates
      │  │     │  │  ├─ swagger-ui-css.html
      │  │     │  │  ├─ swagger-ui-libs.html
      │  │     │  │  └─ swagger-ui.html
      │  │     │  ├─ utils.py
      │  │     │  ├─ _http.py
      │  │     │  ├─ __about__.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ api.cpython-310.pyc
      │  │     │     ├─ apidoc.cpython-310.pyc
      │  │     │     ├─ cors.cpython-310.pyc
      │  │     │     ├─ errors.cpython-310.pyc
      │  │     │     ├─ fields.cpython-310.pyc
      │  │     │     ├─ inputs.cpython-310.pyc
      │  │     │     ├─ marshalling.cpython-310.pyc
      │  │     │     ├─ mask.cpython-310.pyc
      │  │     │     ├─ model.cpython-310.pyc
      │  │     │     ├─ namespace.cpython-310.pyc
      │  │     │     ├─ postman.cpython-310.pyc
      │  │     │     ├─ representations.cpython-310.pyc
      │  │     │     ├─ reqparse.cpython-310.pyc
      │  │     │     ├─ resource.cpython-310.pyc
      │  │     │     ├─ specs.cpython-310.pyc
      │  │     │     ├─ swagger.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ _http.cpython-310.pyc
      │  │     │     ├─ __about__.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ flask_restplus-0.13.0.dist-info
      │  │     │  ├─ DESCRIPTION.rst
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ METADATA
      │  │     │  ├─ metadata.json
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ flask_swagger_ui
      │  │     │  ├─ dist
      │  │     │  │  ├─ favicon-16x16.png
      │  │     │  │  ├─ favicon-32x32.png
      │  │     │  │  ├─ index.css
      │  │     │  │  ├─ LICENSE
      │  │     │  │  ├─ oauth2-redirect.html
      │  │     │  │  ├─ swagger-ui-bundle.js
      │  │     │  │  ├─ swagger-ui-bundle.js.map
      │  │     │  │  ├─ swagger-ui-standalone-preset.js
      │  │     │  │  ├─ swagger-ui-standalone-preset.js.map
      │  │     │  │  ├─ swagger-ui.css
      │  │     │  │  ├─ swagger-ui.css.map
      │  │     │  │  ├─ swagger-ui.js
      │  │     │  │  ├─ swagger-ui.js.map
      │  │     │  │  └─ VERSION
      │  │     │  ├─ flask_swagger_ui.py
      │  │     │  ├─ LICENSE
      │  │     │  ├─ README.md
      │  │     │  ├─ templates
      │  │     │  │  └─ index.template.html
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ flask_swagger_ui.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ flask_swagger_ui-4.11.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ flask_testing
      │  │     │  ├─ twill.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ twill.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ Flask_Testing-0.8.1-py3.10.egg-info
      │  │     │  ├─ dependency_links.txt
      │  │     │  ├─ installed-files.txt
      │  │     │  ├─ not-zip-safe
      │  │     │  ├─ PKG-INFO
      │  │     │  ├─ requires.txt
      │  │     │  ├─ SOURCES.txt
      │  │     │  └─ top_level.txt
      │  │     ├─ gridfs
      │  │     │  ├─ asynchronous
      │  │     │  │  ├─ grid_file.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     └─ grid_file.cpython-310.pyc
      │  │     │  ├─ errors.py
      │  │     │  ├─ grid_file.py
      │  │     │  ├─ grid_file_shared.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ synchronous
      │  │     │  │  ├─ grid_file.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     └─ grid_file.cpython-310.pyc
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ errors.cpython-310.pyc
      │  │     │     ├─ grid_file.cpython-310.pyc
      │  │     │     ├─ grid_file_shared.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ iniconfig
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ _parse.py
      │  │     │  ├─ _version.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ _parse.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ iniconfig-2.1.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ itsdangerous
      │  │     │  ├─ encoding.py
      │  │     │  ├─ exc.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ serializer.py
      │  │     │  ├─ signer.py
      │  │     │  ├─ timed.py
      │  │     │  ├─ url_safe.py
      │  │     │  ├─ _json.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ encoding.cpython-310.pyc
      │  │     │     ├─ exc.cpython-310.pyc
      │  │     │     ├─ serializer.cpython-310.pyc
      │  │     │     ├─ signer.cpython-310.pyc
      │  │     │     ├─ timed.cpython-310.pyc
      │  │     │     ├─ url_safe.cpython-310.pyc
      │  │     │     ├─ _json.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ itsdangerous-2.2.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ jinja2
      │  │     │  ├─ async_utils.py
      │  │     │  ├─ bccache.py
      │  │     │  ├─ compiler.py
      │  │     │  ├─ constants.py
      │  │     │  ├─ debug.py
      │  │     │  ├─ defaults.py
      │  │     │  ├─ environment.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ ext.py
      │  │     │  ├─ filters.py
      │  │     │  ├─ idtracking.py
      │  │     │  ├─ lexer.py
      │  │     │  ├─ loaders.py
      │  │     │  ├─ meta.py
      │  │     │  ├─ nativetypes.py
      │  │     │  ├─ nodes.py
      │  │     │  ├─ optimizer.py
      │  │     │  ├─ parser.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ runtime.py
      │  │     │  ├─ sandbox.py
      │  │     │  ├─ tests.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ visitor.py
      │  │     │  ├─ _identifier.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ async_utils.cpython-310.pyc
      │  │     │     ├─ bccache.cpython-310.pyc
      │  │     │     ├─ compiler.cpython-310.pyc
      │  │     │     ├─ constants.cpython-310.pyc
      │  │     │     ├─ debug.cpython-310.pyc
      │  │     │     ├─ defaults.cpython-310.pyc
      │  │     │     ├─ environment.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ ext.cpython-310.pyc
      │  │     │     ├─ filters.cpython-310.pyc
      │  │     │     ├─ idtracking.cpython-310.pyc
      │  │     │     ├─ lexer.cpython-310.pyc
      │  │     │     ├─ loaders.cpython-310.pyc
      │  │     │     ├─ meta.cpython-310.pyc
      │  │     │     ├─ nativetypes.cpython-310.pyc
      │  │     │     ├─ nodes.cpython-310.pyc
      │  │     │     ├─ optimizer.cpython-310.pyc
      │  │     │     ├─ parser.cpython-310.pyc
      │  │     │     ├─ runtime.cpython-310.pyc
      │  │     │     ├─ sandbox.cpython-310.pyc
      │  │     │     ├─ tests.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ visitor.cpython-310.pyc
      │  │     │     ├─ _identifier.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ jinja2-3.1.6.dist-info
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ jsonschema
      │  │     │  ├─ benchmarks
      │  │     │  │  ├─ const_vs_enum.py
      │  │     │  │  ├─ contains.py
      │  │     │  │  ├─ issue232
      │  │     │  │  │  └─ issue.json
      │  │     │  │  ├─ issue232.py
      │  │     │  │  ├─ json_schema_test_suite.py
      │  │     │  │  ├─ nested_schemas.py
      │  │     │  │  ├─ subcomponents.py
      │  │     │  │  ├─ unused_registry.py
      │  │     │  │  ├─ useless_applicator_schemas.py
      │  │     │  │  ├─ useless_keywords.py
      │  │     │  │  ├─ validator_creation.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ const_vs_enum.cpython-310.pyc
      │  │     │  │     ├─ contains.cpython-310.pyc
      │  │     │  │     ├─ issue232.cpython-310.pyc
      │  │     │  │     ├─ json_schema_test_suite.cpython-310.pyc
      │  │     │  │     ├─ nested_schemas.cpython-310.pyc
      │  │     │  │     ├─ subcomponents.cpython-310.pyc
      │  │     │  │     ├─ unused_registry.cpython-310.pyc
      │  │     │  │     ├─ useless_applicator_schemas.cpython-310.pyc
      │  │     │  │     ├─ useless_keywords.cpython-310.pyc
      │  │     │  │     ├─ validator_creation.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ cli.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ protocols.py
      │  │     │  ├─ tests
      │  │     │  │  ├─ fuzz_validate.py
      │  │     │  │  ├─ test_cli.py
      │  │     │  │  ├─ test_deprecations.py
      │  │     │  │  ├─ test_exceptions.py
      │  │     │  │  ├─ test_format.py
      │  │     │  │  ├─ test_jsonschema_test_suite.py
      │  │     │  │  ├─ test_types.py
      │  │     │  │  ├─ test_utils.py
      │  │     │  │  ├─ test_validators.py
      │  │     │  │  ├─ _suite.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ fuzz_validate.cpython-310.pyc
      │  │     │  │     ├─ test_cli.cpython-310.pyc
      │  │     │  │     ├─ test_deprecations.cpython-310.pyc
      │  │     │  │     ├─ test_exceptions.cpython-310.pyc
      │  │     │  │     ├─ test_format.cpython-310.pyc
      │  │     │  │     ├─ test_jsonschema_test_suite.cpython-310.pyc
      │  │     │  │     ├─ test_types.cpython-310.pyc
      │  │     │  │     ├─ test_utils.cpython-310.pyc
      │  │     │  │     ├─ test_validators.cpython-310.pyc
      │  │     │  │     ├─ _suite.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ validators.py
      │  │     │  ├─ _format.py
      │  │     │  ├─ _keywords.py
      │  │     │  ├─ _legacy_keywords.py
      │  │     │  ├─ _types.py
      │  │     │  ├─ _typing.py
      │  │     │  ├─ _utils.py
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __main__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ cli.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ protocols.cpython-310.pyc
      │  │     │     ├─ validators.cpython-310.pyc
      │  │     │     ├─ _format.cpython-310.pyc
      │  │     │     ├─ _keywords.cpython-310.pyc
      │  │     │     ├─ _legacy_keywords.cpython-310.pyc
      │  │     │     ├─ _types.cpython-310.pyc
      │  │     │     ├─ _typing.cpython-310.pyc
      │  │     │     ├─ _utils.cpython-310.pyc
      │  │     │     ├─ __init__.cpython-310.pyc
      │  │     │     └─ __main__.cpython-310.pyc
      │  │     ├─ jsonschema-4.23.0.dist-info
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ COPYING
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ jsonschema_specifications
      │  │     │  ├─ schemas
      │  │     │  │  ├─ draft201909
      │  │     │  │  │  ├─ metaschema.json
      │  │     │  │  │  └─ vocabularies
      │  │     │  │  │     ├─ applicator
      │  │     │  │  │     ├─ content
      │  │     │  │  │     ├─ core
      │  │     │  │  │     ├─ meta-data
      │  │     │  │  │     └─ validation
      │  │     │  │  ├─ draft202012
      │  │     │  │  │  ├─ metaschema.json
      │  │     │  │  │  └─ vocabularies
      │  │     │  │  │     ├─ applicator
      │  │     │  │  │     ├─ content
      │  │     │  │  │     ├─ core
      │  │     │  │  │     ├─ format
      │  │     │  │  │     ├─ format-annotation
      │  │     │  │  │     ├─ format-assertion
      │  │     │  │  │     ├─ meta-data
      │  │     │  │  │     ├─ unevaluated
      │  │     │  │  │     └─ validation
      │  │     │  │  ├─ draft3
      │  │     │  │  │  └─ metaschema.json
      │  │     │  │  ├─ draft4
      │  │     │  │  │  └─ metaschema.json
      │  │     │  │  ├─ draft6
      │  │     │  │  │  └─ metaschema.json
      │  │     │  │  └─ draft7
      │  │     │  │     └─ metaschema.json
      │  │     │  ├─ tests
      │  │     │  │  ├─ test_jsonschema_specifications.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ test_jsonschema_specifications.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _core.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ _core.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ jsonschema_specifications-2024.10.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ COPYING
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ jwt
      │  │     │  ├─ algorithms.py
      │  │     │  ├─ api_jwk.py
      │  │     │  ├─ api_jws.py
      │  │     │  ├─ api_jwt.py
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ help.py
      │  │     │  ├─ jwks_client.py
      │  │     │  ├─ jwk_set_cache.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ types.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ warnings.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ algorithms.cpython-310.pyc
      │  │     │     ├─ api_jwk.cpython-310.pyc
      │  │     │     ├─ api_jws.cpython-310.pyc
      │  │     │     ├─ api_jwt.cpython-310.pyc
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ help.cpython-310.pyc
      │  │     │     ├─ jwks_client.cpython-310.pyc
      │  │     │     ├─ jwk_set_cache.cpython-310.pyc
      │  │     │     ├─ types.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ warnings.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ markupsafe
      │  │     │  ├─ py.typed
      │  │     │  ├─ _native.py
      │  │     │  ├─ _speedups.c
      │  │     │  ├─ _speedups.cp310-win_amd64.pyd
      │  │     │  ├─ _speedups.pyi
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ _native.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ MarkupSafe-3.0.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ mistune
      │  │     │  ├─ block_parser.py
      │  │     │  ├─ core.py
      │  │     │  ├─ directives
      │  │     │  │  ├─ admonition.py
      │  │     │  │  ├─ image.py
      │  │     │  │  ├─ include.py
      │  │     │  │  ├─ toc.py
      │  │     │  │  ├─ _base.py
      │  │     │  │  ├─ _fenced.py
      │  │     │  │  ├─ _rst.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ admonition.cpython-310.pyc
      │  │     │  │     ├─ image.cpython-310.pyc
      │  │     │  │     ├─ include.cpython-310.pyc
      │  │     │  │     ├─ toc.cpython-310.pyc
      │  │     │  │     ├─ _base.cpython-310.pyc
      │  │     │  │     ├─ _fenced.cpython-310.pyc
      │  │     │  │     ├─ _rst.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ helpers.py
      │  │     │  ├─ inline_parser.py
      │  │     │  ├─ list_parser.py
      │  │     │  ├─ markdown.py
      │  │     │  ├─ plugins
      │  │     │  │  ├─ abbr.py
      │  │     │  │  ├─ def_list.py
      │  │     │  │  ├─ footnotes.py
      │  │     │  │  ├─ formatting.py
      │  │     │  │  ├─ math.py
      │  │     │  │  ├─ ruby.py
      │  │     │  │  ├─ speedup.py
      │  │     │  │  ├─ spoiler.py
      │  │     │  │  ├─ table.py
      │  │     │  │  ├─ task_lists.py
      │  │     │  │  ├─ url.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ abbr.cpython-310.pyc
      │  │     │  │     ├─ def_list.cpython-310.pyc
      │  │     │  │     ├─ footnotes.cpython-310.pyc
      │  │     │  │     ├─ formatting.cpython-310.pyc
      │  │     │  │     ├─ math.cpython-310.pyc
      │  │     │  │     ├─ ruby.cpython-310.pyc
      │  │     │  │     ├─ speedup.cpython-310.pyc
      │  │     │  │     ├─ spoiler.cpython-310.pyc
      │  │     │  │     ├─ table.cpython-310.pyc
      │  │     │  │     ├─ task_lists.cpython-310.pyc
      │  │     │  │     ├─ url.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ py.typed
      │  │     │  ├─ renderers
      │  │     │  │  ├─ html.py
      │  │     │  │  ├─ markdown.py
      │  │     │  │  ├─ rst.py
      │  │     │  │  ├─ _list.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ html.cpython-310.pyc
      │  │     │  │     ├─ markdown.cpython-310.pyc
      │  │     │  │     ├─ rst.cpython-310.pyc
      │  │     │  │     ├─ _list.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ toc.py
      │  │     │  ├─ util.py
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __main__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ block_parser.cpython-310.pyc
      │  │     │     ├─ core.cpython-310.pyc
      │  │     │     ├─ helpers.cpython-310.pyc
      │  │     │     ├─ inline_parser.cpython-310.pyc
      │  │     │     ├─ list_parser.cpython-310.pyc
      │  │     │     ├─ markdown.cpython-310.pyc
      │  │     │     ├─ toc.cpython-310.pyc
      │  │     │     ├─ util.cpython-310.pyc
      │  │     │     ├─ __init__.cpython-310.pyc
      │  │     │     └─ __main__.cpython-310.pyc
      │  │     ├─ mistune-3.1.3.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ packaging
      │  │     │  ├─ licenses
      │  │     │  │  ├─ _spdx.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ _spdx.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ markers.py
      │  │     │  ├─ metadata.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ requirements.py
      │  │     │  ├─ specifiers.py
      │  │     │  ├─ tags.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ version.py
      │  │     │  ├─ _elffile.py
      │  │     │  ├─ _manylinux.py
      │  │     │  ├─ _musllinux.py
      │  │     │  ├─ _parser.py
      │  │     │  ├─ _structures.py
      │  │     │  ├─ _tokenizer.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ markers.cpython-310.pyc
      │  │     │     ├─ metadata.cpython-310.pyc
      │  │     │     ├─ requirements.cpython-310.pyc
      │  │     │     ├─ specifiers.cpython-310.pyc
      │  │     │     ├─ tags.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ version.cpython-310.pyc
      │  │     │     ├─ _elffile.cpython-310.pyc
      │  │     │     ├─ _manylinux.cpython-310.pyc
      │  │     │     ├─ _musllinux.cpython-310.pyc
      │  │     │     ├─ _parser.cpython-310.pyc
      │  │     │     ├─ _structures.cpython-310.pyc
      │  │     │     ├─ _tokenizer.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ packaging-24.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ LICENSE.APACHE
      │  │     │  ├─ LICENSE.BSD
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ pip
      │  │     │  ├─ py.typed
      │  │     │  ├─ _internal
      │  │     │  │  ├─ build_env.py
      │  │     │  │  ├─ cache.py
      │  │     │  │  ├─ cli
      │  │     │  │  │  ├─ autocompletion.py
      │  │     │  │  │  ├─ base_command.py
      │  │     │  │  │  ├─ cmdoptions.py
      │  │     │  │  │  ├─ command_context.py
      │  │     │  │  │  ├─ main.py
      │  │     │  │  │  ├─ main_parser.py
      │  │     │  │  │  ├─ parser.py
      │  │     │  │  │  ├─ progress_bars.py
      │  │     │  │  │  ├─ req_command.py
      │  │     │  │  │  ├─ spinners.py
      │  │     │  │  │  ├─ status_codes.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ autocompletion.cpython-310.pyc
      │  │     │  │  │     ├─ base_command.cpython-310.pyc
      │  │     │  │  │     ├─ cmdoptions.cpython-310.pyc
      │  │     │  │  │     ├─ command_context.cpython-310.pyc
      │  │     │  │  │     ├─ main.cpython-310.pyc
      │  │     │  │  │     ├─ main_parser.cpython-310.pyc
      │  │     │  │  │     ├─ parser.cpython-310.pyc
      │  │     │  │  │     ├─ progress_bars.cpython-310.pyc
      │  │     │  │  │     ├─ req_command.cpython-310.pyc
      │  │     │  │  │     ├─ spinners.cpython-310.pyc
      │  │     │  │  │     ├─ status_codes.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ commands
      │  │     │  │  │  ├─ cache.py
      │  │     │  │  │  ├─ check.py
      │  │     │  │  │  ├─ completion.py
      │  │     │  │  │  ├─ configuration.py
      │  │     │  │  │  ├─ debug.py
      │  │     │  │  │  ├─ download.py
      │  │     │  │  │  ├─ freeze.py
      │  │     │  │  │  ├─ hash.py
      │  │     │  │  │  ├─ help.py
      │  │     │  │  │  ├─ index.py
      │  │     │  │  │  ├─ install.py
      │  │     │  │  │  ├─ list.py
      │  │     │  │  │  ├─ search.py
      │  │     │  │  │  ├─ show.py
      │  │     │  │  │  ├─ uninstall.py
      │  │     │  │  │  ├─ wheel.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ cache.cpython-310.pyc
      │  │     │  │  │     ├─ check.cpython-310.pyc
      │  │     │  │  │     ├─ completion.cpython-310.pyc
      │  │     │  │  │     ├─ configuration.cpython-310.pyc
      │  │     │  │  │     ├─ debug.cpython-310.pyc
      │  │     │  │  │     ├─ download.cpython-310.pyc
      │  │     │  │  │     ├─ freeze.cpython-310.pyc
      │  │     │  │  │     ├─ hash.cpython-310.pyc
      │  │     │  │  │     ├─ help.cpython-310.pyc
      │  │     │  │  │     ├─ index.cpython-310.pyc
      │  │     │  │  │     ├─ install.cpython-310.pyc
      │  │     │  │  │     ├─ list.cpython-310.pyc
      │  │     │  │  │     ├─ search.cpython-310.pyc
      │  │     │  │  │     ├─ show.cpython-310.pyc
      │  │     │  │  │     ├─ uninstall.cpython-310.pyc
      │  │     │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ configuration.py
      │  │     │  │  ├─ distributions
      │  │     │  │  │  ├─ base.py
      │  │     │  │  │  ├─ installed.py
      │  │     │  │  │  ├─ sdist.py
      │  │     │  │  │  ├─ wheel.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │     ├─ installed.cpython-310.pyc
      │  │     │  │  │     ├─ sdist.cpython-310.pyc
      │  │     │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ exceptions.py
      │  │     │  │  ├─ index
      │  │     │  │  │  ├─ collector.py
      │  │     │  │  │  ├─ package_finder.py
      │  │     │  │  │  ├─ sources.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ collector.cpython-310.pyc
      │  │     │  │  │     ├─ package_finder.cpython-310.pyc
      │  │     │  │  │     ├─ sources.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ locations
      │  │     │  │  │  ├─ base.py
      │  │     │  │  │  ├─ _distutils.py
      │  │     │  │  │  ├─ _sysconfig.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │     ├─ _distutils.cpython-310.pyc
      │  │     │  │  │     ├─ _sysconfig.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ main.py
      │  │     │  │  ├─ metadata
      │  │     │  │  │  ├─ base.py
      │  │     │  │  │  ├─ pkg_resources.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │     ├─ pkg_resources.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ models
      │  │     │  │  │  ├─ candidate.py
      │  │     │  │  │  ├─ direct_url.py
      │  │     │  │  │  ├─ format_control.py
      │  │     │  │  │  ├─ index.py
      │  │     │  │  │  ├─ link.py
      │  │     │  │  │  ├─ scheme.py
      │  │     │  │  │  ├─ search_scope.py
      │  │     │  │  │  ├─ selection_prefs.py
      │  │     │  │  │  ├─ target_python.py
      │  │     │  │  │  ├─ wheel.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ candidate.cpython-310.pyc
      │  │     │  │  │     ├─ direct_url.cpython-310.pyc
      │  │     │  │  │     ├─ format_control.cpython-310.pyc
      │  │     │  │  │     ├─ index.cpython-310.pyc
      │  │     │  │  │     ├─ link.cpython-310.pyc
      │  │     │  │  │     ├─ scheme.cpython-310.pyc
      │  │     │  │  │     ├─ search_scope.cpython-310.pyc
      │  │     │  │  │     ├─ selection_prefs.cpython-310.pyc
      │  │     │  │  │     ├─ target_python.cpython-310.pyc
      │  │     │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ network
      │  │     │  │  │  ├─ auth.py
      │  │     │  │  │  ├─ cache.py
      │  │     │  │  │  ├─ download.py
      │  │     │  │  │  ├─ lazy_wheel.py
      │  │     │  │  │  ├─ session.py
      │  │     │  │  │  ├─ utils.py
      │  │     │  │  │  ├─ xmlrpc.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ auth.cpython-310.pyc
      │  │     │  │  │     ├─ cache.cpython-310.pyc
      │  │     │  │  │     ├─ download.cpython-310.pyc
      │  │     │  │  │     ├─ lazy_wheel.cpython-310.pyc
      │  │     │  │  │     ├─ session.cpython-310.pyc
      │  │     │  │  │     ├─ utils.cpython-310.pyc
      │  │     │  │  │     ├─ xmlrpc.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ operations
      │  │     │  │  │  ├─ build
      │  │     │  │  │  │  ├─ metadata.py
      │  │     │  │  │  │  ├─ metadata_legacy.py
      │  │     │  │  │  │  ├─ wheel.py
      │  │     │  │  │  │  ├─ wheel_legacy.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ metadata.cpython-310.pyc
      │  │     │  │  │  │     ├─ metadata_legacy.cpython-310.pyc
      │  │     │  │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │  │     ├─ wheel_legacy.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ check.py
      │  │     │  │  │  ├─ freeze.py
      │  │     │  │  │  ├─ install
      │  │     │  │  │  │  ├─ editable_legacy.py
      │  │     │  │  │  │  ├─ legacy.py
      │  │     │  │  │  │  ├─ wheel.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ editable_legacy.cpython-310.pyc
      │  │     │  │  │  │     ├─ legacy.cpython-310.pyc
      │  │     │  │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ prepare.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ check.cpython-310.pyc
      │  │     │  │  │     ├─ freeze.cpython-310.pyc
      │  │     │  │  │     ├─ prepare.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pyproject.py
      │  │     │  │  ├─ req
      │  │     │  │  │  ├─ constructors.py
      │  │     │  │  │  ├─ req_file.py
      │  │     │  │  │  ├─ req_install.py
      │  │     │  │  │  ├─ req_set.py
      │  │     │  │  │  ├─ req_tracker.py
      │  │     │  │  │  ├─ req_uninstall.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ constructors.cpython-310.pyc
      │  │     │  │  │     ├─ req_file.cpython-310.pyc
      │  │     │  │  │     ├─ req_install.cpython-310.pyc
      │  │     │  │  │     ├─ req_set.cpython-310.pyc
      │  │     │  │  │     ├─ req_tracker.cpython-310.pyc
      │  │     │  │  │     ├─ req_uninstall.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ resolution
      │  │     │  │  │  ├─ base.py
      │  │     │  │  │  ├─ legacy
      │  │     │  │  │  │  ├─ resolver.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ resolver.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ resolvelib
      │  │     │  │  │  │  ├─ base.py
      │  │     │  │  │  │  ├─ candidates.py
      │  │     │  │  │  │  ├─ factory.py
      │  │     │  │  │  │  ├─ found_candidates.py
      │  │     │  │  │  │  ├─ provider.py
      │  │     │  │  │  │  ├─ reporter.py
      │  │     │  │  │  │  ├─ requirements.py
      │  │     │  │  │  │  ├─ resolver.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │  │     ├─ candidates.cpython-310.pyc
      │  │     │  │  │  │     ├─ factory.cpython-310.pyc
      │  │     │  │  │  │     ├─ found_candidates.cpython-310.pyc
      │  │     │  │  │  │     ├─ provider.cpython-310.pyc
      │  │     │  │  │  │     ├─ reporter.cpython-310.pyc
      │  │     │  │  │  │     ├─ requirements.cpython-310.pyc
      │  │     │  │  │  │     ├─ resolver.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ self_outdated_check.py
      │  │     │  │  ├─ utils
      │  │     │  │  │  ├─ appdirs.py
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ compatibility_tags.py
      │  │     │  │  │  ├─ datetime.py
      │  │     │  │  │  ├─ deprecation.py
      │  │     │  │  │  ├─ direct_url_helpers.py
      │  │     │  │  │  ├─ distutils_args.py
      │  │     │  │  │  ├─ encoding.py
      │  │     │  │  │  ├─ entrypoints.py
      │  │     │  │  │  ├─ filesystem.py
      │  │     │  │  │  ├─ filetypes.py
      │  │     │  │  │  ├─ glibc.py
      │  │     │  │  │  ├─ hashes.py
      │  │     │  │  │  ├─ inject_securetransport.py
      │  │     │  │  │  ├─ logging.py
      │  │     │  │  │  ├─ misc.py
      │  │     │  │  │  ├─ models.py
      │  │     │  │  │  ├─ packaging.py
      │  │     │  │  │  ├─ parallel.py
      │  │     │  │  │  ├─ pkg_resources.py
      │  │     │  │  │  ├─ setuptools_build.py
      │  │     │  │  │  ├─ subprocess.py
      │  │     │  │  │  ├─ temp_dir.py
      │  │     │  │  │  ├─ unpacking.py
      │  │     │  │  │  ├─ urls.py
      │  │     │  │  │  ├─ virtualenv.py
      │  │     │  │  │  ├─ wheel.py
      │  │     │  │  │  ├─ _log.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ appdirs.cpython-310.pyc
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ compatibility_tags.cpython-310.pyc
      │  │     │  │  │     ├─ datetime.cpython-310.pyc
      │  │     │  │  │     ├─ deprecation.cpython-310.pyc
      │  │     │  │  │     ├─ direct_url_helpers.cpython-310.pyc
      │  │     │  │  │     ├─ distutils_args.cpython-310.pyc
      │  │     │  │  │     ├─ encoding.cpython-310.pyc
      │  │     │  │  │     ├─ entrypoints.cpython-310.pyc
      │  │     │  │  │     ├─ filesystem.cpython-310.pyc
      │  │     │  │  │     ├─ filetypes.cpython-310.pyc
      │  │     │  │  │     ├─ glibc.cpython-310.pyc
      │  │     │  │  │     ├─ hashes.cpython-310.pyc
      │  │     │  │  │     ├─ inject_securetransport.cpython-310.pyc
      │  │     │  │  │     ├─ logging.cpython-310.pyc
      │  │     │  │  │     ├─ misc.cpython-310.pyc
      │  │     │  │  │     ├─ models.cpython-310.pyc
      │  │     │  │  │     ├─ packaging.cpython-310.pyc
      │  │     │  │  │     ├─ parallel.cpython-310.pyc
      │  │     │  │  │     ├─ pkg_resources.cpython-310.pyc
      │  │     │  │  │     ├─ setuptools_build.cpython-310.pyc
      │  │     │  │  │     ├─ subprocess.cpython-310.pyc
      │  │     │  │  │     ├─ temp_dir.cpython-310.pyc
      │  │     │  │  │     ├─ unpacking.cpython-310.pyc
      │  │     │  │  │     ├─ urls.cpython-310.pyc
      │  │     │  │  │     ├─ virtualenv.cpython-310.pyc
      │  │     │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │     ├─ _log.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ vcs
      │  │     │  │  │  ├─ bazaar.py
      │  │     │  │  │  ├─ git.py
      │  │     │  │  │  ├─ mercurial.py
      │  │     │  │  │  ├─ subversion.py
      │  │     │  │  │  ├─ versioncontrol.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ bazaar.cpython-310.pyc
      │  │     │  │  │     ├─ git.cpython-310.pyc
      │  │     │  │  │     ├─ mercurial.cpython-310.pyc
      │  │     │  │  │     ├─ subversion.cpython-310.pyc
      │  │     │  │  │     ├─ versioncontrol.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ wheel_builder.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ build_env.cpython-310.pyc
      │  │     │  │     ├─ cache.cpython-310.pyc
      │  │     │  │     ├─ configuration.cpython-310.pyc
      │  │     │  │     ├─ exceptions.cpython-310.pyc
      │  │     │  │     ├─ main.cpython-310.pyc
      │  │     │  │     ├─ pyproject.cpython-310.pyc
      │  │     │  │     ├─ self_outdated_check.cpython-310.pyc
      │  │     │  │     ├─ wheel_builder.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _vendor
      │  │     │  │  ├─ appdirs.py
      │  │     │  │  ├─ cachecontrol
      │  │     │  │  │  ├─ adapter.py
      │  │     │  │  │  ├─ cache.py
      │  │     │  │  │  ├─ caches
      │  │     │  │  │  │  ├─ file_cache.py
      │  │     │  │  │  │  ├─ redis_cache.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ file_cache.cpython-310.pyc
      │  │     │  │  │  │     ├─ redis_cache.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ controller.py
      │  │     │  │  │  ├─ filewrapper.py
      │  │     │  │  │  ├─ heuristics.py
      │  │     │  │  │  ├─ serialize.py
      │  │     │  │  │  ├─ wrapper.py
      │  │     │  │  │  ├─ _cmd.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ adapter.cpython-310.pyc
      │  │     │  │  │     ├─ cache.cpython-310.pyc
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ controller.cpython-310.pyc
      │  │     │  │  │     ├─ filewrapper.cpython-310.pyc
      │  │     │  │  │     ├─ heuristics.cpython-310.pyc
      │  │     │  │  │     ├─ serialize.cpython-310.pyc
      │  │     │  │  │     ├─ wrapper.cpython-310.pyc
      │  │     │  │  │     ├─ _cmd.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ certifi
      │  │     │  │  │  ├─ cacert.pem
      │  │     │  │  │  ├─ core.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  ├─ __main__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ core.cpython-310.pyc
      │  │     │  │  │     ├─ __init__.cpython-310.pyc
      │  │     │  │  │     └─ __main__.cpython-310.pyc
      │  │     │  │  ├─ chardet
      │  │     │  │  │  ├─ big5freq.py
      │  │     │  │  │  ├─ big5prober.py
      │  │     │  │  │  ├─ chardistribution.py
      │  │     │  │  │  ├─ charsetgroupprober.py
      │  │     │  │  │  ├─ charsetprober.py
      │  │     │  │  │  ├─ cli
      │  │     │  │  │  │  ├─ chardetect.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ chardetect.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ codingstatemachine.py
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ cp949prober.py
      │  │     │  │  │  ├─ enums.py
      │  │     │  │  │  ├─ escprober.py
      │  │     │  │  │  ├─ escsm.py
      │  │     │  │  │  ├─ eucjpprober.py
      │  │     │  │  │  ├─ euckrfreq.py
      │  │     │  │  │  ├─ euckrprober.py
      │  │     │  │  │  ├─ euctwfreq.py
      │  │     │  │  │  ├─ euctwprober.py
      │  │     │  │  │  ├─ gb2312freq.py
      │  │     │  │  │  ├─ gb2312prober.py
      │  │     │  │  │  ├─ hebrewprober.py
      │  │     │  │  │  ├─ jisfreq.py
      │  │     │  │  │  ├─ jpcntx.py
      │  │     │  │  │  ├─ langbulgarianmodel.py
      │  │     │  │  │  ├─ langgreekmodel.py
      │  │     │  │  │  ├─ langhebrewmodel.py
      │  │     │  │  │  ├─ langhungarianmodel.py
      │  │     │  │  │  ├─ langrussianmodel.py
      │  │     │  │  │  ├─ langthaimodel.py
      │  │     │  │  │  ├─ langturkishmodel.py
      │  │     │  │  │  ├─ latin1prober.py
      │  │     │  │  │  ├─ mbcharsetprober.py
      │  │     │  │  │  ├─ mbcsgroupprober.py
      │  │     │  │  │  ├─ mbcssm.py
      │  │     │  │  │  ├─ metadata
      │  │     │  │  │  │  ├─ languages.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ languages.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ sbcharsetprober.py
      │  │     │  │  │  ├─ sbcsgroupprober.py
      │  │     │  │  │  ├─ sjisprober.py
      │  │     │  │  │  ├─ universaldetector.py
      │  │     │  │  │  ├─ utf8prober.py
      │  │     │  │  │  ├─ version.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ big5freq.cpython-310.pyc
      │  │     │  │  │     ├─ big5prober.cpython-310.pyc
      │  │     │  │  │     ├─ chardistribution.cpython-310.pyc
      │  │     │  │  │     ├─ charsetgroupprober.cpython-310.pyc
      │  │     │  │  │     ├─ charsetprober.cpython-310.pyc
      │  │     │  │  │     ├─ codingstatemachine.cpython-310.pyc
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ cp949prober.cpython-310.pyc
      │  │     │  │  │     ├─ enums.cpython-310.pyc
      │  │     │  │  │     ├─ escprober.cpython-310.pyc
      │  │     │  │  │     ├─ escsm.cpython-310.pyc
      │  │     │  │  │     ├─ eucjpprober.cpython-310.pyc
      │  │     │  │  │     ├─ euckrfreq.cpython-310.pyc
      │  │     │  │  │     ├─ euckrprober.cpython-310.pyc
      │  │     │  │  │     ├─ euctwfreq.cpython-310.pyc
      │  │     │  │  │     ├─ euctwprober.cpython-310.pyc
      │  │     │  │  │     ├─ gb2312freq.cpython-310.pyc
      │  │     │  │  │     ├─ gb2312prober.cpython-310.pyc
      │  │     │  │  │     ├─ hebrewprober.cpython-310.pyc
      │  │     │  │  │     ├─ jisfreq.cpython-310.pyc
      │  │     │  │  │     ├─ jpcntx.cpython-310.pyc
      │  │     │  │  │     ├─ langbulgarianmodel.cpython-310.pyc
      │  │     │  │  │     ├─ langgreekmodel.cpython-310.pyc
      │  │     │  │  │     ├─ langhebrewmodel.cpython-310.pyc
      │  │     │  │  │     ├─ langhungarianmodel.cpython-310.pyc
      │  │     │  │  │     ├─ langrussianmodel.cpython-310.pyc
      │  │     │  │  │     ├─ langthaimodel.cpython-310.pyc
      │  │     │  │  │     ├─ langturkishmodel.cpython-310.pyc
      │  │     │  │  │     ├─ latin1prober.cpython-310.pyc
      │  │     │  │  │     ├─ mbcharsetprober.cpython-310.pyc
      │  │     │  │  │     ├─ mbcsgroupprober.cpython-310.pyc
      │  │     │  │  │     ├─ mbcssm.cpython-310.pyc
      │  │     │  │  │     ├─ sbcharsetprober.cpython-310.pyc
      │  │     │  │  │     ├─ sbcsgroupprober.cpython-310.pyc
      │  │     │  │  │     ├─ sjisprober.cpython-310.pyc
      │  │     │  │  │     ├─ universaldetector.cpython-310.pyc
      │  │     │  │  │     ├─ utf8prober.cpython-310.pyc
      │  │     │  │  │     ├─ version.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ colorama
      │  │     │  │  │  ├─ ansi.py
      │  │     │  │  │  ├─ ansitowin32.py
      │  │     │  │  │  ├─ initialise.py
      │  │     │  │  │  ├─ win32.py
      │  │     │  │  │  ├─ winterm.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ ansi.cpython-310.pyc
      │  │     │  │  │     ├─ ansitowin32.cpython-310.pyc
      │  │     │  │  │     ├─ initialise.cpython-310.pyc
      │  │     │  │  │     ├─ win32.cpython-310.pyc
      │  │     │  │  │     ├─ winterm.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ distlib
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ database.py
      │  │     │  │  │  ├─ index.py
      │  │     │  │  │  ├─ locators.py
      │  │     │  │  │  ├─ manifest.py
      │  │     │  │  │  ├─ markers.py
      │  │     │  │  │  ├─ metadata.py
      │  │     │  │  │  ├─ resources.py
      │  │     │  │  │  ├─ scripts.py
      │  │     │  │  │  ├─ t32.exe
      │  │     │  │  │  ├─ t64.exe
      │  │     │  │  │  ├─ util.py
      │  │     │  │  │  ├─ version.py
      │  │     │  │  │  ├─ w32.exe
      │  │     │  │  │  ├─ w64.exe
      │  │     │  │  │  ├─ wheel.py
      │  │     │  │  │  ├─ _backport
      │  │     │  │  │  │  ├─ misc.py
      │  │     │  │  │  │  ├─ shutil.py
      │  │     │  │  │  │  ├─ sysconfig.cfg
      │  │     │  │  │  │  ├─ sysconfig.py
      │  │     │  │  │  │  ├─ tarfile.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ misc.cpython-310.pyc
      │  │     │  │  │  │     ├─ shutil.cpython-310.pyc
      │  │     │  │  │  │     ├─ sysconfig.cpython-310.pyc
      │  │     │  │  │  │     ├─ tarfile.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ database.cpython-310.pyc
      │  │     │  │  │     ├─ index.cpython-310.pyc
      │  │     │  │  │     ├─ locators.cpython-310.pyc
      │  │     │  │  │     ├─ manifest.cpython-310.pyc
      │  │     │  │  │     ├─ markers.cpython-310.pyc
      │  │     │  │  │     ├─ metadata.cpython-310.pyc
      │  │     │  │  │     ├─ resources.cpython-310.pyc
      │  │     │  │  │     ├─ scripts.cpython-310.pyc
      │  │     │  │  │     ├─ util.cpython-310.pyc
      │  │     │  │  │     ├─ version.cpython-310.pyc
      │  │     │  │  │     ├─ wheel.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ distro.py
      │  │     │  │  ├─ html5lib
      │  │     │  │  │  ├─ constants.py
      │  │     │  │  │  ├─ filters
      │  │     │  │  │  │  ├─ alphabeticalattributes.py
      │  │     │  │  │  │  ├─ base.py
      │  │     │  │  │  │  ├─ inject_meta_charset.py
      │  │     │  │  │  │  ├─ lint.py
      │  │     │  │  │  │  ├─ optionaltags.py
      │  │     │  │  │  │  ├─ sanitizer.py
      │  │     │  │  │  │  ├─ whitespace.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ alphabeticalattributes.cpython-310.pyc
      │  │     │  │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │  │     ├─ inject_meta_charset.cpython-310.pyc
      │  │     │  │  │  │     ├─ lint.cpython-310.pyc
      │  │     │  │  │  │     ├─ optionaltags.cpython-310.pyc
      │  │     │  │  │  │     ├─ sanitizer.cpython-310.pyc
      │  │     │  │  │  │     ├─ whitespace.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ html5parser.py
      │  │     │  │  │  ├─ serializer.py
      │  │     │  │  │  ├─ treeadapters
      │  │     │  │  │  │  ├─ genshi.py
      │  │     │  │  │  │  ├─ sax.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ genshi.cpython-310.pyc
      │  │     │  │  │  │     ├─ sax.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ treebuilders
      │  │     │  │  │  │  ├─ base.py
      │  │     │  │  │  │  ├─ dom.py
      │  │     │  │  │  │  ├─ etree.py
      │  │     │  │  │  │  ├─ etree_lxml.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │  │     ├─ dom.cpython-310.pyc
      │  │     │  │  │  │     ├─ etree.cpython-310.pyc
      │  │     │  │  │  │     ├─ etree_lxml.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ treewalkers
      │  │     │  │  │  │  ├─ base.py
      │  │     │  │  │  │  ├─ dom.py
      │  │     │  │  │  │  ├─ etree.py
      │  │     │  │  │  │  ├─ etree_lxml.py
      │  │     │  │  │  │  ├─ genshi.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ base.cpython-310.pyc
      │  │     │  │  │  │     ├─ dom.cpython-310.pyc
      │  │     │  │  │  │     ├─ etree.cpython-310.pyc
      │  │     │  │  │  │     ├─ etree_lxml.cpython-310.pyc
      │  │     │  │  │  │     ├─ genshi.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ _ihatexml.py
      │  │     │  │  │  ├─ _inputstream.py
      │  │     │  │  │  ├─ _tokenizer.py
      │  │     │  │  │  ├─ _trie
      │  │     │  │  │  │  ├─ py.py
      │  │     │  │  │  │  ├─ _base.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ py.cpython-310.pyc
      │  │     │  │  │  │     ├─ _base.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ _utils.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ constants.cpython-310.pyc
      │  │     │  │  │     ├─ html5parser.cpython-310.pyc
      │  │     │  │  │     ├─ serializer.cpython-310.pyc
      │  │     │  │  │     ├─ _ihatexml.cpython-310.pyc
      │  │     │  │  │     ├─ _inputstream.cpython-310.pyc
      │  │     │  │  │     ├─ _tokenizer.cpython-310.pyc
      │  │     │  │  │     ├─ _utils.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ idna
      │  │     │  │  │  ├─ codec.py
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ core.py
      │  │     │  │  │  ├─ idnadata.py
      │  │     │  │  │  ├─ intranges.py
      │  │     │  │  │  ├─ package_data.py
      │  │     │  │  │  ├─ uts46data.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ codec.cpython-310.pyc
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ core.cpython-310.pyc
      │  │     │  │  │     ├─ idnadata.cpython-310.pyc
      │  │     │  │  │     ├─ intranges.cpython-310.pyc
      │  │     │  │  │     ├─ package_data.cpython-310.pyc
      │  │     │  │  │     ├─ uts46data.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ msgpack
      │  │     │  │  │  ├─ exceptions.py
      │  │     │  │  │  ├─ ext.py
      │  │     │  │  │  ├─ fallback.py
      │  │     │  │  │  ├─ _version.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ exceptions.cpython-310.pyc
      │  │     │  │  │     ├─ ext.cpython-310.pyc
      │  │     │  │  │     ├─ fallback.cpython-310.pyc
      │  │     │  │  │     ├─ _version.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ packaging
      │  │     │  │  │  ├─ markers.py
      │  │     │  │  │  ├─ requirements.py
      │  │     │  │  │  ├─ specifiers.py
      │  │     │  │  │  ├─ tags.py
      │  │     │  │  │  ├─ utils.py
      │  │     │  │  │  ├─ version.py
      │  │     │  │  │  ├─ _manylinux.py
      │  │     │  │  │  ├─ _musllinux.py
      │  │     │  │  │  ├─ _structures.py
      │  │     │  │  │  ├─ __about__.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ markers.cpython-310.pyc
      │  │     │  │  │     ├─ requirements.cpython-310.pyc
      │  │     │  │  │     ├─ specifiers.cpython-310.pyc
      │  │     │  │  │     ├─ tags.cpython-310.pyc
      │  │     │  │  │     ├─ utils.cpython-310.pyc
      │  │     │  │  │     ├─ version.cpython-310.pyc
      │  │     │  │  │     ├─ _manylinux.cpython-310.pyc
      │  │     │  │  │     ├─ _musllinux.cpython-310.pyc
      │  │     │  │  │     ├─ _structures.cpython-310.pyc
      │  │     │  │  │     ├─ __about__.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pep517
      │  │     │  │  │  ├─ build.py
      │  │     │  │  │  ├─ check.py
      │  │     │  │  │  ├─ colorlog.py
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ dirtools.py
      │  │     │  │  │  ├─ envbuild.py
      │  │     │  │  │  ├─ in_process
      │  │     │  │  │  │  ├─ _in_process.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ _in_process.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ meta.py
      │  │     │  │  │  ├─ wrappers.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ build.cpython-310.pyc
      │  │     │  │  │     ├─ check.cpython-310.pyc
      │  │     │  │  │     ├─ colorlog.cpython-310.pyc
      │  │     │  │  │     ├─ compat.cpython-310.pyc
      │  │     │  │  │     ├─ dirtools.cpython-310.pyc
      │  │     │  │  │     ├─ envbuild.cpython-310.pyc
      │  │     │  │  │     ├─ meta.cpython-310.pyc
      │  │     │  │  │     ├─ wrappers.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pkg_resources
      │  │     │  │  │  ├─ py31compat.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ py31compat.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ progress
      │  │     │  │  │  ├─ bar.py
      │  │     │  │  │  ├─ counter.py
      │  │     │  │  │  ├─ spinner.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ bar.cpython-310.pyc
      │  │     │  │  │     ├─ counter.cpython-310.pyc
      │  │     │  │  │     ├─ spinner.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pyparsing.py
      │  │     │  │  ├─ requests
      │  │     │  │  │  ├─ adapters.py
      │  │     │  │  │  ├─ api.py
      │  │     │  │  │  ├─ auth.py
      │  │     │  │  │  ├─ certs.py
      │  │     │  │  │  ├─ compat.py
      │  │     │  │  │  ├─ cookies.py
      │  │     │  │  │  ├─ exceptions.py
      │  │     │  │  │  ├─ help.py
      │  │     │  │  │  ├─ hooks.py
      │  │     │  │  │  ├─ models.py
      │  │     │  │  │  ├─ packages.py
      │  │     │  │  │  ├─ sessions.py
      │  │     │  │  │  ├─ status_codes.py
      │  │     │  │  │  ├─ structures.py
      │  │     │  │  │  ├─ utils.py
      │  │     │  │  │  ├─ _internal_utils.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  ├─ __pycache__
      │  │     │  │  │  │  ├─ adapters.cpython-310.pyc
      │  │     │  │  │  │  ├─ api.cpython-310.pyc
      │  │     │  │  │  │  ├─ auth.cpython-310.pyc
      │  │     │  │  │  │  ├─ certs.cpython-310.pyc
      │  │     │  │  │  │  ├─ compat.cpython-310.pyc
      │  │     │  │  │  │  ├─ cookies.cpython-310.pyc
      │  │     │  │  │  │  ├─ exceptions.cpython-310.pyc
      │  │     │  │  │  │  ├─ help.cpython-310.pyc
      │  │     │  │  │  │  ├─ hooks.cpython-310.pyc
      │  │     │  │  │  │  ├─ models.cpython-310.pyc
      │  │     │  │  │  │  ├─ packages.cpython-310.pyc
      │  │     │  │  │  │  ├─ sessions.cpython-310.pyc
      │  │     │  │  │  │  ├─ status_codes.cpython-310.pyc
      │  │     │  │  │  │  ├─ structures.cpython-310.pyc
      │  │     │  │  │  │  ├─ utils.cpython-310.pyc
      │  │     │  │  │  │  ├─ _internal_utils.cpython-310.pyc
      │  │     │  │  │  │  ├─ __init__.cpython-310.pyc
      │  │     │  │  │  │  └─ __version__.cpython-310.pyc
      │  │     │  │  │  └─ __version__.py
      │  │     │  │  ├─ resolvelib
      │  │     │  │  │  ├─ compat
      │  │     │  │  │  │  ├─ collections_abc.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ collections_abc.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ providers.py
      │  │     │  │  │  ├─ reporters.py
      │  │     │  │  │  ├─ resolvers.py
      │  │     │  │  │  ├─ structs.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ providers.cpython-310.pyc
      │  │     │  │  │     ├─ reporters.cpython-310.pyc
      │  │     │  │  │     ├─ resolvers.cpython-310.pyc
      │  │     │  │  │     ├─ structs.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ six.py
      │  │     │  │  ├─ tenacity
      │  │     │  │  │  ├─ after.py
      │  │     │  │  │  ├─ before.py
      │  │     │  │  │  ├─ before_sleep.py
      │  │     │  │  │  ├─ nap.py
      │  │     │  │  │  ├─ retry.py
      │  │     │  │  │  ├─ stop.py
      │  │     │  │  │  ├─ tornadoweb.py
      │  │     │  │  │  ├─ wait.py
      │  │     │  │  │  ├─ _asyncio.py
      │  │     │  │  │  ├─ _utils.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ after.cpython-310.pyc
      │  │     │  │  │     ├─ before.cpython-310.pyc
      │  │     │  │  │     ├─ before_sleep.cpython-310.pyc
      │  │     │  │  │     ├─ nap.cpython-310.pyc
      │  │     │  │  │     ├─ retry.cpython-310.pyc
      │  │     │  │  │     ├─ stop.cpython-310.pyc
      │  │     │  │  │     ├─ tornadoweb.cpython-310.pyc
      │  │     │  │  │     ├─ wait.cpython-310.pyc
      │  │     │  │  │     ├─ _asyncio.cpython-310.pyc
      │  │     │  │  │     ├─ _utils.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ tomli
      │  │     │  │  │  ├─ _parser.py
      │  │     │  │  │  ├─ _re.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ _parser.cpython-310.pyc
      │  │     │  │  │     ├─ _re.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ urllib3
      │  │     │  │  │  ├─ connection.py
      │  │     │  │  │  ├─ connectionpool.py
      │  │     │  │  │  ├─ contrib
      │  │     │  │  │  │  ├─ appengine.py
      │  │     │  │  │  │  ├─ ntlmpool.py
      │  │     │  │  │  │  ├─ pyopenssl.py
      │  │     │  │  │  │  ├─ securetransport.py
      │  │     │  │  │  │  ├─ socks.py
      │  │     │  │  │  │  ├─ _appengine_environ.py
      │  │     │  │  │  │  ├─ _securetransport
      │  │     │  │  │  │  │  ├─ bindings.py
      │  │     │  │  │  │  │  ├─ low_level.py
      │  │     │  │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  │  └─ __pycache__
      │  │     │  │  │  │  │     ├─ bindings.cpython-310.pyc
      │  │     │  │  │  │  │     ├─ low_level.cpython-310.pyc
      │  │     │  │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ appengine.cpython-310.pyc
      │  │     │  │  │  │     ├─ ntlmpool.cpython-310.pyc
      │  │     │  │  │  │     ├─ pyopenssl.cpython-310.pyc
      │  │     │  │  │  │     ├─ securetransport.cpython-310.pyc
      │  │     │  │  │  │     ├─ socks.cpython-310.pyc
      │  │     │  │  │  │     ├─ _appengine_environ.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ exceptions.py
      │  │     │  │  │  ├─ fields.py
      │  │     │  │  │  ├─ filepost.py
      │  │     │  │  │  ├─ packages
      │  │     │  │  │  │  ├─ backports
      │  │     │  │  │  │  │  ├─ makefile.py
      │  │     │  │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  │  └─ __pycache__
      │  │     │  │  │  │  │     ├─ makefile.cpython-310.pyc
      │  │     │  │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  │  ├─ six.py
      │  │     │  │  │  │  ├─ ssl_match_hostname
      │  │     │  │  │  │  │  ├─ _implementation.py
      │  │     │  │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  │  └─ __pycache__
      │  │     │  │  │  │  │     ├─ _implementation.cpython-310.pyc
      │  │     │  │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ six.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ poolmanager.py
      │  │     │  │  │  ├─ request.py
      │  │     │  │  │  ├─ response.py
      │  │     │  │  │  ├─ util
      │  │     │  │  │  │  ├─ connection.py
      │  │     │  │  │  │  ├─ proxy.py
      │  │     │  │  │  │  ├─ queue.py
      │  │     │  │  │  │  ├─ request.py
      │  │     │  │  │  │  ├─ response.py
      │  │     │  │  │  │  ├─ retry.py
      │  │     │  │  │  │  ├─ ssltransport.py
      │  │     │  │  │  │  ├─ ssl_.py
      │  │     │  │  │  │  ├─ timeout.py
      │  │     │  │  │  │  ├─ url.py
      │  │     │  │  │  │  ├─ wait.py
      │  │     │  │  │  │  ├─ __init__.py
      │  │     │  │  │  │  └─ __pycache__
      │  │     │  │  │  │     ├─ connection.cpython-310.pyc
      │  │     │  │  │  │     ├─ proxy.cpython-310.pyc
      │  │     │  │  │  │     ├─ queue.cpython-310.pyc
      │  │     │  │  │  │     ├─ request.cpython-310.pyc
      │  │     │  │  │  │     ├─ response.cpython-310.pyc
      │  │     │  │  │  │     ├─ retry.cpython-310.pyc
      │  │     │  │  │  │     ├─ ssltransport.cpython-310.pyc
      │  │     │  │  │  │     ├─ ssl_.cpython-310.pyc
      │  │     │  │  │  │     ├─ timeout.cpython-310.pyc
      │  │     │  │  │  │     ├─ url.cpython-310.pyc
      │  │     │  │  │  │     ├─ wait.cpython-310.pyc
      │  │     │  │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  │  ├─ _collections.py
      │  │     │  │  │  ├─ _version.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ connection.cpython-310.pyc
      │  │     │  │  │     ├─ connectionpool.cpython-310.pyc
      │  │     │  │  │     ├─ exceptions.cpython-310.pyc
      │  │     │  │  │     ├─ fields.cpython-310.pyc
      │  │     │  │  │     ├─ filepost.cpython-310.pyc
      │  │     │  │  │     ├─ poolmanager.cpython-310.pyc
      │  │     │  │  │     ├─ request.cpython-310.pyc
      │  │     │  │  │     ├─ response.cpython-310.pyc
      │  │     │  │  │     ├─ _collections.cpython-310.pyc
      │  │     │  │  │     ├─ _version.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ vendor.txt
      │  │     │  │  ├─ webencodings
      │  │     │  │  │  ├─ labels.py
      │  │     │  │  │  ├─ mklabels.py
      │  │     │  │  │  ├─ tests.py
      │  │     │  │  │  ├─ x_user_defined.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ labels.cpython-310.pyc
      │  │     │  │  │     ├─ mklabels.cpython-310.pyc
      │  │     │  │  │     ├─ tests.cpython-310.pyc
      │  │     │  │  │     ├─ x_user_defined.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ appdirs.cpython-310.pyc
      │  │     │  │     ├─ distro.cpython-310.pyc
      │  │     │  │     ├─ pyparsing.cpython-310.pyc
      │  │     │  │     ├─ six.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __main__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ __init__.cpython-310.pyc
      │  │     │     └─ __main__.cpython-310.pyc
      │  │     ├─ pip-21.2.3.dist-info
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ pkg_resources
      │  │     │  ├─ extern
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ tests
      │  │     │  │  └─ data
      │  │     │  │     └─ my-test-package-source
      │  │     │  │        ├─ setup.py
      │  │     │  │        └─ __pycache__
      │  │     │  │           └─ setup.cpython-310.pyc
      │  │     │  ├─ _vendor
      │  │     │  │  ├─ appdirs.py
      │  │     │  │  ├─ packaging
      │  │     │  │  │  ├─ markers.py
      │  │     │  │  │  ├─ requirements.py
      │  │     │  │  │  ├─ specifiers.py
      │  │     │  │  │  ├─ tags.py
      │  │     │  │  │  ├─ utils.py
      │  │     │  │  │  ├─ version.py
      │  │     │  │  │  ├─ _compat.py
      │  │     │  │  │  ├─ _structures.py
      │  │     │  │  │  ├─ _typing.py
      │  │     │  │  │  ├─ __about__.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ markers.cpython-310.pyc
      │  │     │  │  │     ├─ requirements.cpython-310.pyc
      │  │     │  │  │     ├─ specifiers.cpython-310.pyc
      │  │     │  │  │     ├─ tags.cpython-310.pyc
      │  │     │  │  │     ├─ utils.cpython-310.pyc
      │  │     │  │  │     ├─ version.cpython-310.pyc
      │  │     │  │  │     ├─ _compat.cpython-310.pyc
      │  │     │  │  │     ├─ _structures.cpython-310.pyc
      │  │     │  │  │     ├─ _typing.cpython-310.pyc
      │  │     │  │  │     ├─ __about__.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pyparsing.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ appdirs.cpython-310.pyc
      │  │     │  │     ├─ pyparsing.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ pluggy
      │  │     │  ├─ py.typed
      │  │     │  ├─ _callers.py
      │  │     │  ├─ _hooks.py
      │  │     │  ├─ _manager.py
      │  │     │  ├─ _result.py
      │  │     │  ├─ _tracing.py
      │  │     │  ├─ _version.py
      │  │     │  ├─ _warnings.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ _callers.cpython-310.pyc
      │  │     │     ├─ _hooks.cpython-310.pyc
      │  │     │     ├─ _manager.cpython-310.pyc
      │  │     │     ├─ _result.cpython-310.pyc
      │  │     │     ├─ _tracing.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     ├─ _warnings.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ pluggy-1.5.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ py.py
      │  │     ├─ PyJWT-2.10.1.dist-info
      │  │     │  ├─ AUTHORS.rst
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ pymongo
      │  │     │  ├─ asynchronous
      │  │     │  │  ├─ aggregation.py
      │  │     │  │  ├─ auth.py
      │  │     │  │  ├─ auth_aws.py
      │  │     │  │  ├─ auth_oidc.py
      │  │     │  │  ├─ bulk.py
      │  │     │  │  ├─ change_stream.py
      │  │     │  │  ├─ client_bulk.py
      │  │     │  │  ├─ client_session.py
      │  │     │  │  ├─ collection.py
      │  │     │  │  ├─ command_cursor.py
      │  │     │  │  ├─ cursor.py
      │  │     │  │  ├─ database.py
      │  │     │  │  ├─ encryption.py
      │  │     │  │  ├─ helpers.py
      │  │     │  │  ├─ mongo_client.py
      │  │     │  │  ├─ monitor.py
      │  │     │  │  ├─ network.py
      │  │     │  │  ├─ pool.py
      │  │     │  │  ├─ server.py
      │  │     │  │  ├─ settings.py
      │  │     │  │  ├─ topology.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ aggregation.cpython-310.pyc
      │  │     │  │     ├─ auth.cpython-310.pyc
      │  │     │  │     ├─ auth_aws.cpython-310.pyc
      │  │     │  │     ├─ auth_oidc.cpython-310.pyc
      │  │     │  │     ├─ bulk.cpython-310.pyc
      │  │     │  │     ├─ change_stream.cpython-310.pyc
      │  │     │  │     ├─ client_bulk.cpython-310.pyc
      │  │     │  │     ├─ client_session.cpython-310.pyc
      │  │     │  │     ├─ collection.cpython-310.pyc
      │  │     │  │     ├─ command_cursor.cpython-310.pyc
      │  │     │  │     ├─ cursor.cpython-310.pyc
      │  │     │  │     ├─ database.cpython-310.pyc
      │  │     │  │     ├─ encryption.cpython-310.pyc
      │  │     │  │     ├─ helpers.cpython-310.pyc
      │  │     │  │     ├─ mongo_client.cpython-310.pyc
      │  │     │  │     ├─ monitor.cpython-310.pyc
      │  │     │  │     ├─ network.cpython-310.pyc
      │  │     │  │     ├─ pool.cpython-310.pyc
      │  │     │  │     ├─ server.cpython-310.pyc
      │  │     │  │     ├─ settings.cpython-310.pyc
      │  │     │  │     ├─ topology.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ auth.py
      │  │     │  ├─ auth_oidc.py
      │  │     │  ├─ auth_oidc_shared.py
      │  │     │  ├─ auth_shared.py
      │  │     │  ├─ bulk_shared.py
      │  │     │  ├─ change_stream.py
      │  │     │  ├─ client_options.py
      │  │     │  ├─ client_session.py
      │  │     │  ├─ collation.py
      │  │     │  ├─ collection.py
      │  │     │  ├─ command_cursor.py
      │  │     │  ├─ common.py
      │  │     │  ├─ compression_support.py
      │  │     │  ├─ cursor.py
      │  │     │  ├─ cursor_shared.py
      │  │     │  ├─ daemon.py
      │  │     │  ├─ database.py
      │  │     │  ├─ database_shared.py
      │  │     │  ├─ driver_info.py
      │  │     │  ├─ encryption.py
      │  │     │  ├─ encryption_options.py
      │  │     │  ├─ errors.py
      │  │     │  ├─ event_loggers.py
      │  │     │  ├─ hello.py
      │  │     │  ├─ helpers_shared.py
      │  │     │  ├─ lock.py
      │  │     │  ├─ logger.py
      │  │     │  ├─ max_staleness_selectors.py
      │  │     │  ├─ message.py
      │  │     │  ├─ mongo_client.py
      │  │     │  ├─ monitoring.py
      │  │     │  ├─ network_layer.py
      │  │     │  ├─ ocsp_cache.py
      │  │     │  ├─ ocsp_support.py
      │  │     │  ├─ operations.py
      │  │     │  ├─ periodic_executor.py
      │  │     │  ├─ pool.py
      │  │     │  ├─ pool_options.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ pyopenssl_context.py
      │  │     │  ├─ read_concern.py
      │  │     │  ├─ read_preferences.py
      │  │     │  ├─ response.py
      │  │     │  ├─ results.py
      │  │     │  ├─ saslprep.py
      │  │     │  ├─ server_api.py
      │  │     │  ├─ server_description.py
      │  │     │  ├─ server_selectors.py
      │  │     │  ├─ server_type.py
      │  │     │  ├─ socket_checker.py
      │  │     │  ├─ srv_resolver.py
      │  │     │  ├─ ssl_context.py
      │  │     │  ├─ ssl_support.py
      │  │     │  ├─ synchronous
      │  │     │  │  ├─ aggregation.py
      │  │     │  │  ├─ auth.py
      │  │     │  │  ├─ auth_aws.py
      │  │     │  │  ├─ auth_oidc.py
      │  │     │  │  ├─ bulk.py
      │  │     │  │  ├─ change_stream.py
      │  │     │  │  ├─ client_bulk.py
      │  │     │  │  ├─ client_session.py
      │  │     │  │  ├─ collection.py
      │  │     │  │  ├─ command_cursor.py
      │  │     │  │  ├─ cursor.py
      │  │     │  │  ├─ database.py
      │  │     │  │  ├─ encryption.py
      │  │     │  │  ├─ helpers.py
      │  │     │  │  ├─ mongo_client.py
      │  │     │  │  ├─ monitor.py
      │  │     │  │  ├─ network.py
      │  │     │  │  ├─ pool.py
      │  │     │  │  ├─ server.py
      │  │     │  │  ├─ settings.py
      │  │     │  │  ├─ topology.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ aggregation.cpython-310.pyc
      │  │     │  │     ├─ auth.cpython-310.pyc
      │  │     │  │     ├─ auth_aws.cpython-310.pyc
      │  │     │  │     ├─ auth_oidc.cpython-310.pyc
      │  │     │  │     ├─ bulk.cpython-310.pyc
      │  │     │  │     ├─ change_stream.cpython-310.pyc
      │  │     │  │     ├─ client_bulk.cpython-310.pyc
      │  │     │  │     ├─ client_session.cpython-310.pyc
      │  │     │  │     ├─ collection.cpython-310.pyc
      │  │     │  │     ├─ command_cursor.cpython-310.pyc
      │  │     │  │     ├─ cursor.cpython-310.pyc
      │  │     │  │     ├─ database.cpython-310.pyc
      │  │     │  │     ├─ encryption.cpython-310.pyc
      │  │     │  │     ├─ helpers.cpython-310.pyc
      │  │     │  │     ├─ mongo_client.cpython-310.pyc
      │  │     │  │     ├─ monitor.cpython-310.pyc
      │  │     │  │     ├─ network.cpython-310.pyc
      │  │     │  │     ├─ pool.cpython-310.pyc
      │  │     │  │     ├─ server.cpython-310.pyc
      │  │     │  │     ├─ settings.cpython-310.pyc
      │  │     │  │     ├─ topology.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ topology_description.py
      │  │     │  ├─ typings.py
      │  │     │  ├─ uri_parser.py
      │  │     │  ├─ write_concern.py
      │  │     │  ├─ _asyncio_lock.py
      │  │     │  ├─ _asyncio_task.py
      │  │     │  ├─ _azure_helpers.py
      │  │     │  ├─ _client_bulk_shared.py
      │  │     │  ├─ _cmessage.cp310-win_amd64.pyd
      │  │     │  ├─ _cmessage.cp39-win_amd64.pyd
      │  │     │  ├─ _cmessagemodule.c
      │  │     │  ├─ _csot.py
      │  │     │  ├─ _gcp_helpers.py
      │  │     │  ├─ _version.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ auth.cpython-310.pyc
      │  │     │     ├─ auth_oidc.cpython-310.pyc
      │  │     │     ├─ auth_oidc_shared.cpython-310.pyc
      │  │     │     ├─ auth_shared.cpython-310.pyc
      │  │     │     ├─ bulk_shared.cpython-310.pyc
      │  │     │     ├─ change_stream.cpython-310.pyc
      │  │     │     ├─ client_options.cpython-310.pyc
      │  │     │     ├─ client_session.cpython-310.pyc
      │  │     │     ├─ collation.cpython-310.pyc
      │  │     │     ├─ collection.cpython-310.pyc
      │  │     │     ├─ command_cursor.cpython-310.pyc
      │  │     │     ├─ common.cpython-310.pyc
      │  │     │     ├─ compression_support.cpython-310.pyc
      │  │     │     ├─ cursor.cpython-310.pyc
      │  │     │     ├─ cursor_shared.cpython-310.pyc
      │  │     │     ├─ daemon.cpython-310.pyc
      │  │     │     ├─ database.cpython-310.pyc
      │  │     │     ├─ database_shared.cpython-310.pyc
      │  │     │     ├─ driver_info.cpython-310.pyc
      │  │     │     ├─ encryption.cpython-310.pyc
      │  │     │     ├─ encryption_options.cpython-310.pyc
      │  │     │     ├─ errors.cpython-310.pyc
      │  │     │     ├─ event_loggers.cpython-310.pyc
      │  │     │     ├─ hello.cpython-310.pyc
      │  │     │     ├─ helpers_shared.cpython-310.pyc
      │  │     │     ├─ lock.cpython-310.pyc
      │  │     │     ├─ logger.cpython-310.pyc
      │  │     │     ├─ max_staleness_selectors.cpython-310.pyc
      │  │     │     ├─ message.cpython-310.pyc
      │  │     │     ├─ mongo_client.cpython-310.pyc
      │  │     │     ├─ monitoring.cpython-310.pyc
      │  │     │     ├─ network_layer.cpython-310.pyc
      │  │     │     ├─ ocsp_cache.cpython-310.pyc
      │  │     │     ├─ ocsp_support.cpython-310.pyc
      │  │     │     ├─ operations.cpython-310.pyc
      │  │     │     ├─ periodic_executor.cpython-310.pyc
      │  │     │     ├─ pool.cpython-310.pyc
      │  │     │     ├─ pool_options.cpython-310.pyc
      │  │     │     ├─ pyopenssl_context.cpython-310.pyc
      │  │     │     ├─ read_concern.cpython-310.pyc
      │  │     │     ├─ read_preferences.cpython-310.pyc
      │  │     │     ├─ response.cpython-310.pyc
      │  │     │     ├─ results.cpython-310.pyc
      │  │     │     ├─ saslprep.cpython-310.pyc
      │  │     │     ├─ server_api.cpython-310.pyc
      │  │     │     ├─ server_description.cpython-310.pyc
      │  │     │     ├─ server_selectors.cpython-310.pyc
      │  │     │     ├─ server_type.cpython-310.pyc
      │  │     │     ├─ socket_checker.cpython-310.pyc
      │  │     │     ├─ srv_resolver.cpython-310.pyc
      │  │     │     ├─ ssl_context.cpython-310.pyc
      │  │     │     ├─ ssl_support.cpython-310.pyc
      │  │     │     ├─ topology_description.cpython-310.pyc
      │  │     │     ├─ typings.cpython-310.pyc
      │  │     │     ├─ uri_parser.cpython-310.pyc
      │  │     │     ├─ write_concern.cpython-310.pyc
      │  │     │     ├─ _asyncio_lock.cpython-310.pyc
      │  │     │     ├─ _asyncio_task.cpython-310.pyc
      │  │     │     ├─ _azure_helpers.cpython-310.pyc
      │  │     │     ├─ _client_bulk_shared.cpython-310.pyc
      │  │     │     ├─ _csot.cpython-310.pyc
      │  │     │     ├─ _gcp_helpers.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ pymongo-4.11.3.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  └─ WHEEL
      │  │     ├─ pytest
      │  │     │  ├─ py.typed
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __main__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ __init__.cpython-310.pyc
      │  │     │     └─ __main__.cpython-310.pyc
      │  │     ├─ pytest-8.3.5.dist-info
      │  │     │  ├─ AUTHORS
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ pytz
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ lazy.py
      │  │     │  ├─ reference.py
      │  │     │  ├─ tzfile.py
      │  │     │  ├─ tzinfo.py
      │  │     │  ├─ zoneinfo
      │  │     │  │  ├─ Africa
      │  │     │  │  │  ├─ Abidjan
      │  │     │  │  │  ├─ Accra
      │  │     │  │  │  ├─ Addis_Ababa
      │  │     │  │  │  ├─ Algiers
      │  │     │  │  │  ├─ Asmara
      │  │     │  │  │  ├─ Asmera
      │  │     │  │  │  ├─ Bamako
      │  │     │  │  │  ├─ Bangui
      │  │     │  │  │  ├─ Banjul
      │  │     │  │  │  ├─ Bissau
      │  │     │  │  │  ├─ Blantyre
      │  │     │  │  │  ├─ Brazzaville
      │  │     │  │  │  ├─ Bujumbura
      │  │     │  │  │  ├─ Cairo
      │  │     │  │  │  ├─ Casablanca
      │  │     │  │  │  ├─ Ceuta
      │  │     │  │  │  ├─ Conakry
      │  │     │  │  │  ├─ Dakar
      │  │     │  │  │  ├─ Dar_es_Salaam
      │  │     │  │  │  ├─ Djibouti
      │  │     │  │  │  ├─ Douala
      │  │     │  │  │  ├─ El_Aaiun
      │  │     │  │  │  ├─ Freetown
      │  │     │  │  │  ├─ Gaborone
      │  │     │  │  │  ├─ Harare
      │  │     │  │  │  ├─ Johannesburg
      │  │     │  │  │  ├─ Juba
      │  │     │  │  │  ├─ Kampala
      │  │     │  │  │  ├─ Khartoum
      │  │     │  │  │  ├─ Kigali
      │  │     │  │  │  ├─ Kinshasa
      │  │     │  │  │  ├─ Lagos
      │  │     │  │  │  ├─ Libreville
      │  │     │  │  │  ├─ Lome
      │  │     │  │  │  ├─ Luanda
      │  │     │  │  │  ├─ Lubumbashi
      │  │     │  │  │  ├─ Lusaka
      │  │     │  │  │  ├─ Malabo
      │  │     │  │  │  ├─ Maputo
      │  │     │  │  │  ├─ Maseru
      │  │     │  │  │  ├─ Mbabane
      │  │     │  │  │  ├─ Mogadishu
      │  │     │  │  │  ├─ Monrovia
      │  │     │  │  │  ├─ Nairobi
      │  │     │  │  │  ├─ Ndjamena
      │  │     │  │  │  ├─ Niamey
      │  │     │  │  │  ├─ Nouakchott
      │  │     │  │  │  ├─ Ouagadougou
      │  │     │  │  │  ├─ Porto-Novo
      │  │     │  │  │  ├─ Sao_Tome
      │  │     │  │  │  ├─ Timbuktu
      │  │     │  │  │  ├─ Tripoli
      │  │     │  │  │  ├─ Tunis
      │  │     │  │  │  └─ Windhoek
      │  │     │  │  ├─ America
      │  │     │  │  │  ├─ Adak
      │  │     │  │  │  ├─ Anchorage
      │  │     │  │  │  ├─ Anguilla
      │  │     │  │  │  ├─ Antigua
      │  │     │  │  │  ├─ Araguaina
      │  │     │  │  │  ├─ Argentina
      │  │     │  │  │  │  ├─ Buenos_Aires
      │  │     │  │  │  │  ├─ Catamarca
      │  │     │  │  │  │  ├─ ComodRivadavia
      │  │     │  │  │  │  ├─ Cordoba
      │  │     │  │  │  │  ├─ Jujuy
      │  │     │  │  │  │  ├─ La_Rioja
      │  │     │  │  │  │  ├─ Mendoza
      │  │     │  │  │  │  ├─ Rio_Gallegos
      │  │     │  │  │  │  ├─ Salta
      │  │     │  │  │  │  ├─ San_Juan
      │  │     │  │  │  │  ├─ San_Luis
      │  │     │  │  │  │  ├─ Tucuman
      │  │     │  │  │  │  └─ Ushuaia
      │  │     │  │  │  ├─ Aruba
      │  │     │  │  │  ├─ Asuncion
      │  │     │  │  │  ├─ Atikokan
      │  │     │  │  │  ├─ Atka
      │  │     │  │  │  ├─ Bahia
      │  │     │  │  │  ├─ Bahia_Banderas
      │  │     │  │  │  ├─ Barbados
      │  │     │  │  │  ├─ Belem
      │  │     │  │  │  ├─ Belize
      │  │     │  │  │  ├─ Blanc-Sablon
      │  │     │  │  │  ├─ Boa_Vista
      │  │     │  │  │  ├─ Bogota
      │  │     │  │  │  ├─ Boise
      │  │     │  │  │  ├─ Buenos_Aires
      │  │     │  │  │  ├─ Cambridge_Bay
      │  │     │  │  │  ├─ Campo_Grande
      │  │     │  │  │  ├─ Cancun
      │  │     │  │  │  ├─ Caracas
      │  │     │  │  │  ├─ Catamarca
      │  │     │  │  │  ├─ Cayenne
      │  │     │  │  │  ├─ Cayman
      │  │     │  │  │  ├─ Chicago
      │  │     │  │  │  ├─ Chihuahua
      │  │     │  │  │  ├─ Ciudad_Juarez
      │  │     │  │  │  ├─ Coral_Harbour
      │  │     │  │  │  ├─ Cordoba
      │  │     │  │  │  ├─ Costa_Rica
      │  │     │  │  │  ├─ Creston
      │  │     │  │  │  ├─ Cuiaba
      │  │     │  │  │  ├─ Curacao
      │  │     │  │  │  ├─ Danmarkshavn
      │  │     │  │  │  ├─ Dawson
      │  │     │  │  │  ├─ Dawson_Creek
      │  │     │  │  │  ├─ Denver
      │  │     │  │  │  ├─ Detroit
      │  │     │  │  │  ├─ Dominica
      │  │     │  │  │  ├─ Edmonton
      │  │     │  │  │  ├─ Eirunepe
      │  │     │  │  │  ├─ El_Salvador
      │  │     │  │  │  ├─ Ensenada
      │  │     │  │  │  ├─ Fortaleza
      │  │     │  │  │  ├─ Fort_Nelson
      │  │     │  │  │  ├─ Fort_Wayne
      │  │     │  │  │  ├─ Glace_Bay
      │  │     │  │  │  ├─ Godthab
      │  │     │  │  │  ├─ Goose_Bay
      │  │     │  │  │  ├─ Grand_Turk
      │  │     │  │  │  ├─ Grenada
      │  │     │  │  │  ├─ Guadeloupe
      │  │     │  │  │  ├─ Guatemala
      │  │     │  │  │  ├─ Guayaquil
      │  │     │  │  │  ├─ Guyana
      │  │     │  │  │  ├─ Halifax
      │  │     │  │  │  ├─ Havana
      │  │     │  │  │  ├─ Hermosillo
      │  │     │  │  │  ├─ Indiana
      │  │     │  │  │  │  ├─ Indianapolis
      │  │     │  │  │  │  ├─ Knox
      │  │     │  │  │  │  ├─ Marengo
      │  │     │  │  │  │  ├─ Petersburg
      │  │     │  │  │  │  ├─ Tell_City
      │  │     │  │  │  │  ├─ Vevay
      │  │     │  │  │  │  ├─ Vincennes
      │  │     │  │  │  │  └─ Winamac
      │  │     │  │  │  ├─ Indianapolis
      │  │     │  │  │  ├─ Inuvik
      │  │     │  │  │  ├─ Iqaluit
      │  │     │  │  │  ├─ Jamaica
      │  │     │  │  │  ├─ Jujuy
      │  │     │  │  │  ├─ Juneau
      │  │     │  │  │  ├─ Kentucky
      │  │     │  │  │  │  ├─ Louisville
      │  │     │  │  │  │  └─ Monticello
      │  │     │  │  │  ├─ Knox_IN
      │  │     │  │  │  ├─ Kralendijk
      │  │     │  │  │  ├─ La_Paz
      │  │     │  │  │  ├─ Lima
      │  │     │  │  │  ├─ Los_Angeles
      │  │     │  │  │  ├─ Louisville
      │  │     │  │  │  ├─ Lower_Princes
      │  │     │  │  │  ├─ Maceio
      │  │     │  │  │  ├─ Managua
      │  │     │  │  │  ├─ Manaus
      │  │     │  │  │  ├─ Marigot
      │  │     │  │  │  ├─ Martinique
      │  │     │  │  │  ├─ Matamoros
      │  │     │  │  │  ├─ Mazatlan
      │  │     │  │  │  ├─ Mendoza
      │  │     │  │  │  ├─ Menominee
      │  │     │  │  │  ├─ Merida
      │  │     │  │  │  ├─ Metlakatla
      │  │     │  │  │  ├─ Mexico_City
      │  │     │  │  │  ├─ Miquelon
      │  │     │  │  │  ├─ Moncton
      │  │     │  │  │  ├─ Monterrey
      │  │     │  │  │  ├─ Montevideo
      │  │     │  │  │  ├─ Montreal
      │  │     │  │  │  ├─ Montserrat
      │  │     │  │  │  ├─ Nassau
      │  │     │  │  │  ├─ New_York
      │  │     │  │  │  ├─ Nipigon
      │  │     │  │  │  ├─ Nome
      │  │     │  │  │  ├─ Noronha
      │  │     │  │  │  ├─ North_Dakota
      │  │     │  │  │  │  ├─ Beulah
      │  │     │  │  │  │  ├─ Center
      │  │     │  │  │  │  └─ New_Salem
      │  │     │  │  │  ├─ Nuuk
      │  │     │  │  │  ├─ Ojinaga
      │  │     │  │  │  ├─ Panama
      │  │     │  │  │  ├─ Pangnirtung
      │  │     │  │  │  ├─ Paramaribo
      │  │     │  │  │  ├─ Phoenix
      │  │     │  │  │  ├─ Port-au-Prince
      │  │     │  │  │  ├─ Porto_Acre
      │  │     │  │  │  ├─ Porto_Velho
      │  │     │  │  │  ├─ Port_of_Spain
      │  │     │  │  │  ├─ Puerto_Rico
      │  │     │  │  │  ├─ Punta_Arenas
      │  │     │  │  │  ├─ Rainy_River
      │  │     │  │  │  ├─ Rankin_Inlet
      │  │     │  │  │  ├─ Recife
      │  │     │  │  │  ├─ Regina
      │  │     │  │  │  ├─ Resolute
      │  │     │  │  │  ├─ Rio_Branco
      │  │     │  │  │  ├─ Rosario
      │  │     │  │  │  ├─ Santarem
      │  │     │  │  │  ├─ Santa_Isabel
      │  │     │  │  │  ├─ Santiago
      │  │     │  │  │  ├─ Santo_Domingo
      │  │     │  │  │  ├─ Sao_Paulo
      │  │     │  │  │  ├─ Scoresbysund
      │  │     │  │  │  ├─ Shiprock
      │  │     │  │  │  ├─ Sitka
      │  │     │  │  │  ├─ St_Barthelemy
      │  │     │  │  │  ├─ St_Johns
      │  │     │  │  │  ├─ St_Kitts
      │  │     │  │  │  ├─ St_Lucia
      │  │     │  │  │  ├─ St_Thomas
      │  │     │  │  │  ├─ St_Vincent
      │  │     │  │  │  ├─ Swift_Current
      │  │     │  │  │  ├─ Tegucigalpa
      │  │     │  │  │  ├─ Thule
      │  │     │  │  │  ├─ Thunder_Bay
      │  │     │  │  │  ├─ Tijuana
      │  │     │  │  │  ├─ Toronto
      │  │     │  │  │  ├─ Tortola
      │  │     │  │  │  ├─ Vancouver
      │  │     │  │  │  ├─ Virgin
      │  │     │  │  │  ├─ Whitehorse
      │  │     │  │  │  ├─ Winnipeg
      │  │     │  │  │  ├─ Yakutat
      │  │     │  │  │  └─ Yellowknife
      │  │     │  │  ├─ Antarctica
      │  │     │  │  │  ├─ Casey
      │  │     │  │  │  ├─ Davis
      │  │     │  │  │  ├─ DumontDUrville
      │  │     │  │  │  ├─ Macquarie
      │  │     │  │  │  ├─ Mawson
      │  │     │  │  │  ├─ McMurdo
      │  │     │  │  │  ├─ Palmer
      │  │     │  │  │  ├─ Rothera
      │  │     │  │  │  ├─ South_Pole
      │  │     │  │  │  ├─ Syowa
      │  │     │  │  │  ├─ Troll
      │  │     │  │  │  └─ Vostok
      │  │     │  │  ├─ Arctic
      │  │     │  │  │  └─ Longyearbyen
      │  │     │  │  ├─ Asia
      │  │     │  │  │  ├─ Aden
      │  │     │  │  │  ├─ Almaty
      │  │     │  │  │  ├─ Amman
      │  │     │  │  │  ├─ Anadyr
      │  │     │  │  │  ├─ Aqtau
      │  │     │  │  │  ├─ Aqtobe
      │  │     │  │  │  ├─ Ashgabat
      │  │     │  │  │  ├─ Ashkhabad
      │  │     │  │  │  ├─ Atyrau
      │  │     │  │  │  ├─ Baghdad
      │  │     │  │  │  ├─ Bahrain
      │  │     │  │  │  ├─ Baku
      │  │     │  │  │  ├─ Bangkok
      │  │     │  │  │  ├─ Barnaul
      │  │     │  │  │  ├─ Beirut
      │  │     │  │  │  ├─ Bishkek
      │  │     │  │  │  ├─ Brunei
      │  │     │  │  │  ├─ Calcutta
      │  │     │  │  │  ├─ Chita
      │  │     │  │  │  ├─ Choibalsan
      │  │     │  │  │  ├─ Chongqing
      │  │     │  │  │  ├─ Chungking
      │  │     │  │  │  ├─ Colombo
      │  │     │  │  │  ├─ Dacca
      │  │     │  │  │  ├─ Damascus
      │  │     │  │  │  ├─ Dhaka
      │  │     │  │  │  ├─ Dili
      │  │     │  │  │  ├─ Dubai
      │  │     │  │  │  ├─ Dushanbe
      │  │     │  │  │  ├─ Famagusta
      │  │     │  │  │  ├─ Gaza
      │  │     │  │  │  ├─ Harbin
      │  │     │  │  │  ├─ Hebron
      │  │     │  │  │  ├─ Hong_Kong
      │  │     │  │  │  ├─ Hovd
      │  │     │  │  │  ├─ Ho_Chi_Minh
      │  │     │  │  │  ├─ Irkutsk
      │  │     │  │  │  ├─ Istanbul
      │  │     │  │  │  ├─ Jakarta
      │  │     │  │  │  ├─ Jayapura
      │  │     │  │  │  ├─ Jerusalem
      │  │     │  │  │  ├─ Kabul
      │  │     │  │  │  ├─ Kamchatka
      │  │     │  │  │  ├─ Karachi
      │  │     │  │  │  ├─ Kashgar
      │  │     │  │  │  ├─ Kathmandu
      │  │     │  │  │  ├─ Katmandu
      │  │     │  │  │  ├─ Khandyga
      │  │     │  │  │  ├─ Kolkata
      │  │     │  │  │  ├─ Krasnoyarsk
      │  │     │  │  │  ├─ Kuala_Lumpur
      │  │     │  │  │  ├─ Kuching
      │  │     │  │  │  ├─ Kuwait
      │  │     │  │  │  ├─ Macao
      │  │     │  │  │  ├─ Macau
      │  │     │  │  │  ├─ Magadan
      │  │     │  │  │  ├─ Makassar
      │  │     │  │  │  ├─ Manila
      │  │     │  │  │  ├─ Muscat
      │  │     │  │  │  ├─ Nicosia
      │  │     │  │  │  ├─ Novokuznetsk
      │  │     │  │  │  ├─ Novosibirsk
      │  │     │  │  │  ├─ Omsk
      │  │     │  │  │  ├─ Oral
      │  │     │  │  │  ├─ Phnom_Penh
      │  │     │  │  │  ├─ Pontianak
      │  │     │  │  │  ├─ Pyongyang
      │  │     │  │  │  ├─ Qatar
      │  │     │  │  │  ├─ Qostanay
      │  │     │  │  │  ├─ Qyzylorda
      │  │     │  │  │  ├─ Rangoon
      │  │     │  │  │  ├─ Riyadh
      │  │     │  │  │  ├─ Saigon
      │  │     │  │  │  ├─ Sakhalin
      │  │     │  │  │  ├─ Samarkand
      │  │     │  │  │  ├─ Seoul
      │  │     │  │  │  ├─ Shanghai
      │  │     │  │  │  ├─ Singapore
      │  │     │  │  │  ├─ Srednekolymsk
      │  │     │  │  │  ├─ Taipei
      │  │     │  │  │  ├─ Tashkent
      │  │     │  │  │  ├─ Tbilisi
      │  │     │  │  │  ├─ Tehran
      │  │     │  │  │  ├─ Tel_Aviv
      │  │     │  │  │  ├─ Thimbu
      │  │     │  │  │  ├─ Thimphu
      │  │     │  │  │  ├─ Tokyo
      │  │     │  │  │  ├─ Tomsk
      │  │     │  │  │  ├─ Ujung_Pandang
      │  │     │  │  │  ├─ Ulaanbaatar
      │  │     │  │  │  ├─ Ulan_Bator
      │  │     │  │  │  ├─ Urumqi
      │  │     │  │  │  ├─ Ust-Nera
      │  │     │  │  │  ├─ Vientiane
      │  │     │  │  │  ├─ Vladivostok
      │  │     │  │  │  ├─ Yakutsk
      │  │     │  │  │  ├─ Yangon
      │  │     │  │  │  ├─ Yekaterinburg
      │  │     │  │  │  └─ Yerevan
      │  │     │  │  ├─ Atlantic
      │  │     │  │  │  ├─ Azores
      │  │     │  │  │  ├─ Bermuda
      │  │     │  │  │  ├─ Canary
      │  │     │  │  │  ├─ Cape_Verde
      │  │     │  │  │  ├─ Faeroe
      │  │     │  │  │  ├─ Faroe
      │  │     │  │  │  ├─ Jan_Mayen
      │  │     │  │  │  ├─ Madeira
      │  │     │  │  │  ├─ Reykjavik
      │  │     │  │  │  ├─ South_Georgia
      │  │     │  │  │  ├─ Stanley
      │  │     │  │  │  └─ St_Helena
      │  │     │  │  ├─ Australia
      │  │     │  │  │  ├─ ACT
      │  │     │  │  │  ├─ Adelaide
      │  │     │  │  │  ├─ Brisbane
      │  │     │  │  │  ├─ Broken_Hill
      │  │     │  │  │  ├─ Canberra
      │  │     │  │  │  ├─ Currie
      │  │     │  │  │  ├─ Darwin
      │  │     │  │  │  ├─ Eucla
      │  │     │  │  │  ├─ Hobart
      │  │     │  │  │  ├─ LHI
      │  │     │  │  │  ├─ Lindeman
      │  │     │  │  │  ├─ Lord_Howe
      │  │     │  │  │  ├─ Melbourne
      │  │     │  │  │  ├─ North
      │  │     │  │  │  ├─ NSW
      │  │     │  │  │  ├─ Perth
      │  │     │  │  │  ├─ Queensland
      │  │     │  │  │  ├─ South
      │  │     │  │  │  ├─ Sydney
      │  │     │  │  │  ├─ Tasmania
      │  │     │  │  │  ├─ Victoria
      │  │     │  │  │  ├─ West
      │  │     │  │  │  └─ Yancowinna
      │  │     │  │  ├─ Brazil
      │  │     │  │  │  ├─ Acre
      │  │     │  │  │  ├─ DeNoronha
      │  │     │  │  │  ├─ East
      │  │     │  │  │  └─ West
      │  │     │  │  ├─ Canada
      │  │     │  │  │  ├─ Atlantic
      │  │     │  │  │  ├─ Central
      │  │     │  │  │  ├─ Eastern
      │  │     │  │  │  ├─ Mountain
      │  │     │  │  │  ├─ Newfoundland
      │  │     │  │  │  ├─ Pacific
      │  │     │  │  │  ├─ Saskatchewan
      │  │     │  │  │  └─ Yukon
      │  │     │  │  ├─ CET
      │  │     │  │  ├─ Chile
      │  │     │  │  │  ├─ Continental
      │  │     │  │  │  └─ EasterIsland
      │  │     │  │  ├─ CST6CDT
      │  │     │  │  ├─ Cuba
      │  │     │  │  ├─ EET
      │  │     │  │  ├─ Egypt
      │  │     │  │  ├─ Eire
      │  │     │  │  ├─ EST
      │  │     │  │  ├─ EST5EDT
      │  │     │  │  ├─ Etc
      │  │     │  │  │  ├─ GMT
      │  │     │  │  │  ├─ GMT+0
      │  │     │  │  │  ├─ GMT+1
      │  │     │  │  │  ├─ GMT+10
      │  │     │  │  │  ├─ GMT+11
      │  │     │  │  │  ├─ GMT+12
      │  │     │  │  │  ├─ GMT+2
      │  │     │  │  │  ├─ GMT+3
      │  │     │  │  │  ├─ GMT+4
      │  │     │  │  │  ├─ GMT+5
      │  │     │  │  │  ├─ GMT+6
      │  │     │  │  │  ├─ GMT+7
      │  │     │  │  │  ├─ GMT+8
      │  │     │  │  │  ├─ GMT+9
      │  │     │  │  │  ├─ GMT-0
      │  │     │  │  │  ├─ GMT-1
      │  │     │  │  │  ├─ GMT-10
      │  │     │  │  │  ├─ GMT-11
      │  │     │  │  │  ├─ GMT-12
      │  │     │  │  │  ├─ GMT-13
      │  │     │  │  │  ├─ GMT-14
      │  │     │  │  │  ├─ GMT-2
      │  │     │  │  │  ├─ GMT-3
      │  │     │  │  │  ├─ GMT-4
      │  │     │  │  │  ├─ GMT-5
      │  │     │  │  │  ├─ GMT-6
      │  │     │  │  │  ├─ GMT-7
      │  │     │  │  │  ├─ GMT-8
      │  │     │  │  │  ├─ GMT-9
      │  │     │  │  │  ├─ GMT0
      │  │     │  │  │  ├─ Greenwich
      │  │     │  │  │  ├─ UCT
      │  │     │  │  │  ├─ Universal
      │  │     │  │  │  ├─ UTC
      │  │     │  │  │  └─ Zulu
      │  │     │  │  ├─ Europe
      │  │     │  │  │  ├─ Amsterdam
      │  │     │  │  │  ├─ Andorra
      │  │     │  │  │  ├─ Astrakhan
      │  │     │  │  │  ├─ Athens
      │  │     │  │  │  ├─ Belfast
      │  │     │  │  │  ├─ Belgrade
      │  │     │  │  │  ├─ Berlin
      │  │     │  │  │  ├─ Bratislava
      │  │     │  │  │  ├─ Brussels
      │  │     │  │  │  ├─ Bucharest
      │  │     │  │  │  ├─ Budapest
      │  │     │  │  │  ├─ Busingen
      │  │     │  │  │  ├─ Chisinau
      │  │     │  │  │  ├─ Copenhagen
      │  │     │  │  │  ├─ Dublin
      │  │     │  │  │  ├─ Gibraltar
      │  │     │  │  │  ├─ Guernsey
      │  │     │  │  │  ├─ Helsinki
      │  │     │  │  │  ├─ Isle_of_Man
      │  │     │  │  │  ├─ Istanbul
      │  │     │  │  │  ├─ Jersey
      │  │     │  │  │  ├─ Kaliningrad
      │  │     │  │  │  ├─ Kiev
      │  │     │  │  │  ├─ Kirov
      │  │     │  │  │  ├─ Kyiv
      │  │     │  │  │  ├─ Lisbon
      │  │     │  │  │  ├─ Ljubljana
      │  │     │  │  │  ├─ London
      │  │     │  │  │  ├─ Luxembourg
      │  │     │  │  │  ├─ Madrid
      │  │     │  │  │  ├─ Malta
      │  │     │  │  │  ├─ Mariehamn
      │  │     │  │  │  ├─ Minsk
      │  │     │  │  │  ├─ Monaco
      │  │     │  │  │  ├─ Moscow
      │  │     │  │  │  ├─ Nicosia
      │  │     │  │  │  ├─ Oslo
      │  │     │  │  │  ├─ Paris
      │  │     │  │  │  ├─ Podgorica
      │  │     │  │  │  ├─ Prague
      │  │     │  │  │  ├─ Riga
      │  │     │  │  │  ├─ Rome
      │  │     │  │  │  ├─ Samara
      │  │     │  │  │  ├─ San_Marino
      │  │     │  │  │  ├─ Sarajevo
      │  │     │  │  │  ├─ Saratov
      │  │     │  │  │  ├─ Simferopol
      │  │     │  │  │  ├─ Skopje
      │  │     │  │  │  ├─ Sofia
      │  │     │  │  │  ├─ Stockholm
      │  │     │  │  │  ├─ Tallinn
      │  │     │  │  │  ├─ Tirane
      │  │     │  │  │  ├─ Tiraspol
      │  │     │  │  │  ├─ Ulyanovsk
      │  │     │  │  │  ├─ Uzhgorod
      │  │     │  │  │  ├─ Vaduz
      │  │     │  │  │  ├─ Vatican
      │  │     │  │  │  ├─ Vienna
      │  │     │  │  │  ├─ Vilnius
      │  │     │  │  │  ├─ Volgograd
      │  │     │  │  │  ├─ Warsaw
      │  │     │  │  │  ├─ Zagreb
      │  │     │  │  │  ├─ Zaporozhye
      │  │     │  │  │  └─ Zurich
      │  │     │  │  ├─ Factory
      │  │     │  │  ├─ GB
      │  │     │  │  ├─ GB-Eire
      │  │     │  │  ├─ GMT
      │  │     │  │  ├─ GMT+0
      │  │     │  │  ├─ GMT-0
      │  │     │  │  ├─ GMT0
      │  │     │  │  ├─ Greenwich
      │  │     │  │  ├─ Hongkong
      │  │     │  │  ├─ HST
      │  │     │  │  ├─ Iceland
      │  │     │  │  ├─ Indian
      │  │     │  │  │  ├─ Antananarivo
      │  │     │  │  │  ├─ Chagos
      │  │     │  │  │  ├─ Christmas
      │  │     │  │  │  ├─ Cocos
      │  │     │  │  │  ├─ Comoro
      │  │     │  │  │  ├─ Kerguelen
      │  │     │  │  │  ├─ Mahe
      │  │     │  │  │  ├─ Maldives
      │  │     │  │  │  ├─ Mauritius
      │  │     │  │  │  ├─ Mayotte
      │  │     │  │  │  └─ Reunion
      │  │     │  │  ├─ Iran
      │  │     │  │  ├─ iso3166.tab
      │  │     │  │  ├─ Israel
      │  │     │  │  ├─ Jamaica
      │  │     │  │  ├─ Japan
      │  │     │  │  ├─ Kwajalein
      │  │     │  │  ├─ leapseconds
      │  │     │  │  ├─ Libya
      │  │     │  │  ├─ MET
      │  │     │  │  ├─ Mexico
      │  │     │  │  │  ├─ BajaNorte
      │  │     │  │  │  ├─ BajaSur
      │  │     │  │  │  └─ General
      │  │     │  │  ├─ MST
      │  │     │  │  ├─ MST7MDT
      │  │     │  │  ├─ Navajo
      │  │     │  │  ├─ NZ
      │  │     │  │  ├─ NZ-CHAT
      │  │     │  │  ├─ Pacific
      │  │     │  │  │  ├─ Apia
      │  │     │  │  │  ├─ Auckland
      │  │     │  │  │  ├─ Bougainville
      │  │     │  │  │  ├─ Chatham
      │  │     │  │  │  ├─ Chuuk
      │  │     │  │  │  ├─ Easter
      │  │     │  │  │  ├─ Efate
      │  │     │  │  │  ├─ Enderbury
      │  │     │  │  │  ├─ Fakaofo
      │  │     │  │  │  ├─ Fiji
      │  │     │  │  │  ├─ Funafuti
      │  │     │  │  │  ├─ Galapagos
      │  │     │  │  │  ├─ Gambier
      │  │     │  │  │  ├─ Guadalcanal
      │  │     │  │  │  ├─ Guam
      │  │     │  │  │  ├─ Honolulu
      │  │     │  │  │  ├─ Johnston
      │  │     │  │  │  ├─ Kanton
      │  │     │  │  │  ├─ Kiritimati
      │  │     │  │  │  ├─ Kosrae
      │  │     │  │  │  ├─ Kwajalein
      │  │     │  │  │  ├─ Majuro
      │  │     │  │  │  ├─ Marquesas
      │  │     │  │  │  ├─ Midway
      │  │     │  │  │  ├─ Nauru
      │  │     │  │  │  ├─ Niue
      │  │     │  │  │  ├─ Norfolk
      │  │     │  │  │  ├─ Noumea
      │  │     │  │  │  ├─ Pago_Pago
      │  │     │  │  │  ├─ Palau
      │  │     │  │  │  ├─ Pitcairn
      │  │     │  │  │  ├─ Pohnpei
      │  │     │  │  │  ├─ Ponape
      │  │     │  │  │  ├─ Port_Moresby
      │  │     │  │  │  ├─ Rarotonga
      │  │     │  │  │  ├─ Saipan
      │  │     │  │  │  ├─ Samoa
      │  │     │  │  │  ├─ Tahiti
      │  │     │  │  │  ├─ Tarawa
      │  │     │  │  │  ├─ Tongatapu
      │  │     │  │  │  ├─ Truk
      │  │     │  │  │  ├─ Wake
      │  │     │  │  │  ├─ Wallis
      │  │     │  │  │  └─ Yap
      │  │     │  │  ├─ Poland
      │  │     │  │  ├─ Portugal
      │  │     │  │  ├─ PRC
      │  │     │  │  ├─ PST8PDT
      │  │     │  │  ├─ ROC
      │  │     │  │  ├─ ROK
      │  │     │  │  ├─ Singapore
      │  │     │  │  ├─ Turkey
      │  │     │  │  ├─ tzdata.zi
      │  │     │  │  ├─ UCT
      │  │     │  │  ├─ Universal
      │  │     │  │  ├─ US
      │  │     │  │  │  ├─ Alaska
      │  │     │  │  │  ├─ Aleutian
      │  │     │  │  │  ├─ Arizona
      │  │     │  │  │  ├─ Central
      │  │     │  │  │  ├─ East-Indiana
      │  │     │  │  │  ├─ Eastern
      │  │     │  │  │  ├─ Hawaii
      │  │     │  │  │  ├─ Indiana-Starke
      │  │     │  │  │  ├─ Michigan
      │  │     │  │  │  ├─ Mountain
      │  │     │  │  │  ├─ Pacific
      │  │     │  │  │  └─ Samoa
      │  │     │  │  ├─ UTC
      │  │     │  │  ├─ W-SU
      │  │     │  │  ├─ WET
      │  │     │  │  ├─ zone.tab
      │  │     │  │  ├─ zone1970.tab
      │  │     │  │  ├─ zonenow.tab
      │  │     │  │  └─ Zulu
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ lazy.cpython-310.pyc
      │  │     │     ├─ reference.cpython-310.pyc
      │  │     │     ├─ tzfile.cpython-310.pyc
      │  │     │     ├─ tzinfo.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ pytz-2025.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  ├─ WHEEL
      │  │     │  └─ zip-safe
      │  │     ├─ PyYAML-6.0.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ referencing
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ jsonschema.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ retrieval.py
      │  │     │  ├─ tests
      │  │     │  │  ├─ test_core.py
      │  │     │  │  ├─ test_exceptions.py
      │  │     │  │  ├─ test_jsonschema.py
      │  │     │  │  ├─ test_referencing_suite.py
      │  │     │  │  ├─ test_retrieval.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ test_core.cpython-310.pyc
      │  │     │  │     ├─ test_exceptions.cpython-310.pyc
      │  │     │  │     ├─ test_jsonschema.cpython-310.pyc
      │  │     │  │     ├─ test_referencing_suite.cpython-310.pyc
      │  │     │  │     ├─ test_retrieval.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ typing.py
      │  │     │  ├─ _attrs.py
      │  │     │  ├─ _attrs.pyi
      │  │     │  ├─ _core.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ jsonschema.cpython-310.pyc
      │  │     │     ├─ retrieval.cpython-310.pyc
      │  │     │     ├─ typing.cpython-310.pyc
      │  │     │     ├─ _attrs.cpython-310.pyc
      │  │     │     ├─ _core.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ referencing-0.36.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ COPYING
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ rpds
      │  │     │  ├─ py.typed
      │  │     │  ├─ rpds.cp310-win_amd64.pyd
      │  │     │  ├─ __init__.py
      │  │     │  ├─ __init__.pyi
      │  │     │  └─ __pycache__
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ rpds_py-0.23.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ licenses
      │  │     │  │  └─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ setuptools
      │  │     │  ├─ archive_util.py
      │  │     │  ├─ build_meta.py
      │  │     │  ├─ cli-32.exe
      │  │     │  ├─ cli-64.exe
      │  │     │  ├─ cli.exe
      │  │     │  ├─ command
      │  │     │  │  ├─ alias.py
      │  │     │  │  ├─ bdist_egg.py
      │  │     │  │  ├─ bdist_rpm.py
      │  │     │  │  ├─ build_clib.py
      │  │     │  │  ├─ build_ext.py
      │  │     │  │  ├─ build_py.py
      │  │     │  │  ├─ develop.py
      │  │     │  │  ├─ dist_info.py
      │  │     │  │  ├─ easy_install.py
      │  │     │  │  ├─ egg_info.py
      │  │     │  │  ├─ install.py
      │  │     │  │  ├─ install_egg_info.py
      │  │     │  │  ├─ install_lib.py
      │  │     │  │  ├─ install_scripts.py
      │  │     │  │  ├─ launcher manifest.xml
      │  │     │  │  ├─ py36compat.py
      │  │     │  │  ├─ register.py
      │  │     │  │  ├─ rotate.py
      │  │     │  │  ├─ saveopts.py
      │  │     │  │  ├─ sdist.py
      │  │     │  │  ├─ setopt.py
      │  │     │  │  ├─ test.py
      │  │     │  │  ├─ upload.py
      │  │     │  │  ├─ upload_docs.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ alias.cpython-310.pyc
      │  │     │  │     ├─ bdist_egg.cpython-310.pyc
      │  │     │  │     ├─ bdist_rpm.cpython-310.pyc
      │  │     │  │     ├─ build_clib.cpython-310.pyc
      │  │     │  │     ├─ build_ext.cpython-310.pyc
      │  │     │  │     ├─ build_py.cpython-310.pyc
      │  │     │  │     ├─ develop.cpython-310.pyc
      │  │     │  │     ├─ dist_info.cpython-310.pyc
      │  │     │  │     ├─ easy_install.cpython-310.pyc
      │  │     │  │     ├─ egg_info.cpython-310.pyc
      │  │     │  │     ├─ install.cpython-310.pyc
      │  │     │  │     ├─ install_egg_info.cpython-310.pyc
      │  │     │  │     ├─ install_lib.cpython-310.pyc
      │  │     │  │     ├─ install_scripts.cpython-310.pyc
      │  │     │  │     ├─ py36compat.cpython-310.pyc
      │  │     │  │     ├─ register.cpython-310.pyc
      │  │     │  │     ├─ rotate.cpython-310.pyc
      │  │     │  │     ├─ saveopts.cpython-310.pyc
      │  │     │  │     ├─ sdist.cpython-310.pyc
      │  │     │  │     ├─ setopt.cpython-310.pyc
      │  │     │  │     ├─ test.cpython-310.pyc
      │  │     │  │     ├─ upload.cpython-310.pyc
      │  │     │  │     ├─ upload_docs.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ config.py
      │  │     │  ├─ depends.py
      │  │     │  ├─ dep_util.py
      │  │     │  ├─ dist.py
      │  │     │  ├─ errors.py
      │  │     │  ├─ extension.py
      │  │     │  ├─ extern
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ glob.py
      │  │     │  ├─ gui-32.exe
      │  │     │  ├─ gui-64.exe
      │  │     │  ├─ gui.exe
      │  │     │  ├─ installer.py
      │  │     │  ├─ launch.py
      │  │     │  ├─ lib2to3_ex.py
      │  │     │  ├─ monkey.py
      │  │     │  ├─ msvc.py
      │  │     │  ├─ namespaces.py
      │  │     │  ├─ package_index.py
      │  │     │  ├─ py34compat.py
      │  │     │  ├─ sandbox.py
      │  │     │  ├─ script (dev).tmpl
      │  │     │  ├─ script.tmpl
      │  │     │  ├─ unicode_utils.py
      │  │     │  ├─ version.py
      │  │     │  ├─ wheel.py
      │  │     │  ├─ windows_support.py
      │  │     │  ├─ _deprecation_warning.py
      │  │     │  ├─ _distutils
      │  │     │  │  ├─ archive_util.py
      │  │     │  │  ├─ bcppcompiler.py
      │  │     │  │  ├─ ccompiler.py
      │  │     │  │  ├─ cmd.py
      │  │     │  │  ├─ command
      │  │     │  │  │  ├─ bdist.py
      │  │     │  │  │  ├─ bdist_dumb.py
      │  │     │  │  │  ├─ bdist_msi.py
      │  │     │  │  │  ├─ bdist_rpm.py
      │  │     │  │  │  ├─ bdist_wininst.py
      │  │     │  │  │  ├─ build.py
      │  │     │  │  │  ├─ build_clib.py
      │  │     │  │  │  ├─ build_ext.py
      │  │     │  │  │  ├─ build_py.py
      │  │     │  │  │  ├─ build_scripts.py
      │  │     │  │  │  ├─ check.py
      │  │     │  │  │  ├─ clean.py
      │  │     │  │  │  ├─ config.py
      │  │     │  │  │  ├─ install.py
      │  │     │  │  │  ├─ install_data.py
      │  │     │  │  │  ├─ install_egg_info.py
      │  │     │  │  │  ├─ install_headers.py
      │  │     │  │  │  ├─ install_lib.py
      │  │     │  │  │  ├─ install_scripts.py
      │  │     │  │  │  ├─ py37compat.py
      │  │     │  │  │  ├─ register.py
      │  │     │  │  │  ├─ sdist.py
      │  │     │  │  │  ├─ upload.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ bdist.cpython-310.pyc
      │  │     │  │  │     ├─ bdist_dumb.cpython-310.pyc
      │  │     │  │  │     ├─ bdist_msi.cpython-310.pyc
      │  │     │  │  │     ├─ bdist_rpm.cpython-310.pyc
      │  │     │  │  │     ├─ bdist_wininst.cpython-310.pyc
      │  │     │  │  │     ├─ build.cpython-310.pyc
      │  │     │  │  │     ├─ build_clib.cpython-310.pyc
      │  │     │  │  │     ├─ build_ext.cpython-310.pyc
      │  │     │  │  │     ├─ build_py.cpython-310.pyc
      │  │     │  │  │     ├─ build_scripts.cpython-310.pyc
      │  │     │  │  │     ├─ check.cpython-310.pyc
      │  │     │  │  │     ├─ clean.cpython-310.pyc
      │  │     │  │  │     ├─ config.cpython-310.pyc
      │  │     │  │  │     ├─ install.cpython-310.pyc
      │  │     │  │  │     ├─ install_data.cpython-310.pyc
      │  │     │  │  │     ├─ install_egg_info.cpython-310.pyc
      │  │     │  │  │     ├─ install_headers.cpython-310.pyc
      │  │     │  │  │     ├─ install_lib.cpython-310.pyc
      │  │     │  │  │     ├─ install_scripts.cpython-310.pyc
      │  │     │  │  │     ├─ py37compat.cpython-310.pyc
      │  │     │  │  │     ├─ register.cpython-310.pyc
      │  │     │  │  │     ├─ sdist.cpython-310.pyc
      │  │     │  │  │     ├─ upload.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ config.py
      │  │     │  │  ├─ core.py
      │  │     │  │  ├─ cygwinccompiler.py
      │  │     │  │  ├─ debug.py
      │  │     │  │  ├─ dep_util.py
      │  │     │  │  ├─ dir_util.py
      │  │     │  │  ├─ dist.py
      │  │     │  │  ├─ errors.py
      │  │     │  │  ├─ extension.py
      │  │     │  │  ├─ fancy_getopt.py
      │  │     │  │  ├─ filelist.py
      │  │     │  │  ├─ file_util.py
      │  │     │  │  ├─ log.py
      │  │     │  │  ├─ msvc9compiler.py
      │  │     │  │  ├─ msvccompiler.py
      │  │     │  │  ├─ py35compat.py
      │  │     │  │  ├─ py38compat.py
      │  │     │  │  ├─ spawn.py
      │  │     │  │  ├─ sysconfig.py
      │  │     │  │  ├─ text_file.py
      │  │     │  │  ├─ unixccompiler.py
      │  │     │  │  ├─ util.py
      │  │     │  │  ├─ version.py
      │  │     │  │  ├─ versionpredicate.py
      │  │     │  │  ├─ _msvccompiler.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ archive_util.cpython-310.pyc
      │  │     │  │     ├─ bcppcompiler.cpython-310.pyc
      │  │     │  │     ├─ ccompiler.cpython-310.pyc
      │  │     │  │     ├─ cmd.cpython-310.pyc
      │  │     │  │     ├─ config.cpython-310.pyc
      │  │     │  │     ├─ core.cpython-310.pyc
      │  │     │  │     ├─ cygwinccompiler.cpython-310.pyc
      │  │     │  │     ├─ debug.cpython-310.pyc
      │  │     │  │     ├─ dep_util.cpython-310.pyc
      │  │     │  │     ├─ dir_util.cpython-310.pyc
      │  │     │  │     ├─ dist.cpython-310.pyc
      │  │     │  │     ├─ errors.cpython-310.pyc
      │  │     │  │     ├─ extension.cpython-310.pyc
      │  │     │  │     ├─ fancy_getopt.cpython-310.pyc
      │  │     │  │     ├─ filelist.cpython-310.pyc
      │  │     │  │     ├─ file_util.cpython-310.pyc
      │  │     │  │     ├─ log.cpython-310.pyc
      │  │     │  │     ├─ msvc9compiler.cpython-310.pyc
      │  │     │  │     ├─ msvccompiler.cpython-310.pyc
      │  │     │  │     ├─ py35compat.cpython-310.pyc
      │  │     │  │     ├─ py38compat.cpython-310.pyc
      │  │     │  │     ├─ spawn.cpython-310.pyc
      │  │     │  │     ├─ sysconfig.cpython-310.pyc
      │  │     │  │     ├─ text_file.cpython-310.pyc
      │  │     │  │     ├─ unixccompiler.cpython-310.pyc
      │  │     │  │     ├─ util.cpython-310.pyc
      │  │     │  │     ├─ version.cpython-310.pyc
      │  │     │  │     ├─ versionpredicate.cpython-310.pyc
      │  │     │  │     ├─ _msvccompiler.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _imp.py
      │  │     │  ├─ _vendor
      │  │     │  │  ├─ more_itertools
      │  │     │  │  │  ├─ more.py
      │  │     │  │  │  ├─ recipes.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ more.cpython-310.pyc
      │  │     │  │  │     ├─ recipes.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ ordered_set.py
      │  │     │  │  ├─ packaging
      │  │     │  │  │  ├─ markers.py
      │  │     │  │  │  ├─ requirements.py
      │  │     │  │  │  ├─ specifiers.py
      │  │     │  │  │  ├─ tags.py
      │  │     │  │  │  ├─ utils.py
      │  │     │  │  │  ├─ version.py
      │  │     │  │  │  ├─ _compat.py
      │  │     │  │  │  ├─ _structures.py
      │  │     │  │  │  ├─ _typing.py
      │  │     │  │  │  ├─ __about__.py
      │  │     │  │  │  ├─ __init__.py
      │  │     │  │  │  └─ __pycache__
      │  │     │  │  │     ├─ markers.cpython-310.pyc
      │  │     │  │  │     ├─ requirements.cpython-310.pyc
      │  │     │  │  │     ├─ specifiers.cpython-310.pyc
      │  │     │  │  │     ├─ tags.cpython-310.pyc
      │  │     │  │  │     ├─ utils.cpython-310.pyc
      │  │     │  │  │     ├─ version.cpython-310.pyc
      │  │     │  │  │     ├─ _compat.cpython-310.pyc
      │  │     │  │  │     ├─ _structures.cpython-310.pyc
      │  │     │  │  │     ├─ _typing.cpython-310.pyc
      │  │     │  │  │     ├─ __about__.cpython-310.pyc
      │  │     │  │  │     └─ __init__.cpython-310.pyc
      │  │     │  │  ├─ pyparsing.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ ordered_set.cpython-310.pyc
      │  │     │  │     ├─ pyparsing.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ archive_util.cpython-310.pyc
      │  │     │     ├─ build_meta.cpython-310.pyc
      │  │     │     ├─ config.cpython-310.pyc
      │  │     │     ├─ depends.cpython-310.pyc
      │  │     │     ├─ dep_util.cpython-310.pyc
      │  │     │     ├─ dist.cpython-310.pyc
      │  │     │     ├─ errors.cpython-310.pyc
      │  │     │     ├─ extension.cpython-310.pyc
      │  │     │     ├─ glob.cpython-310.pyc
      │  │     │     ├─ installer.cpython-310.pyc
      │  │     │     ├─ launch.cpython-310.pyc
      │  │     │     ├─ lib2to3_ex.cpython-310.pyc
      │  │     │     ├─ monkey.cpython-310.pyc
      │  │     │     ├─ msvc.cpython-310.pyc
      │  │     │     ├─ namespaces.cpython-310.pyc
      │  │     │     ├─ package_index.cpython-310.pyc
      │  │     │     ├─ py34compat.cpython-310.pyc
      │  │     │     ├─ sandbox.cpython-310.pyc
      │  │     │     ├─ unicode_utils.cpython-310.pyc
      │  │     │     ├─ version.cpython-310.pyc
      │  │     │     ├─ wheel.cpython-310.pyc
      │  │     │     ├─ windows_support.cpython-310.pyc
      │  │     │     ├─ _deprecation_warning.cpython-310.pyc
      │  │     │     ├─ _imp.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ setuptools-57.4.0.dist-info
      │  │     │  ├─ entry_points.txt
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ REQUESTED
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ six-1.17.0.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  ├─ top_level.txt
      │  │     │  └─ WHEEL
      │  │     ├─ six.py
      │  │     ├─ tomli
      │  │     │  ├─ py.typed
      │  │     │  ├─ _parser.py
      │  │     │  ├─ _re.py
      │  │     │  ├─ _types.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ _parser.cpython-310.pyc
      │  │     │     ├─ _re.cpython-310.pyc
      │  │     │     ├─ _types.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ tomli-2.2.1.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ typing_extensions-4.12.2.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ typing_extensions.py
      │  │     ├─ werkzeug
      │  │     │  ├─ datastructures
      │  │     │  │  ├─ accept.py
      │  │     │  │  ├─ auth.py
      │  │     │  │  ├─ cache_control.py
      │  │     │  │  ├─ csp.py
      │  │     │  │  ├─ etag.py
      │  │     │  │  ├─ file_storage.py
      │  │     │  │  ├─ headers.py
      │  │     │  │  ├─ mixins.py
      │  │     │  │  ├─ range.py
      │  │     │  │  ├─ structures.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ accept.cpython-310.pyc
      │  │     │  │     ├─ auth.cpython-310.pyc
      │  │     │  │     ├─ cache_control.cpython-310.pyc
      │  │     │  │     ├─ csp.cpython-310.pyc
      │  │     │  │     ├─ etag.cpython-310.pyc
      │  │     │  │     ├─ file_storage.cpython-310.pyc
      │  │     │  │     ├─ headers.cpython-310.pyc
      │  │     │  │     ├─ mixins.cpython-310.pyc
      │  │     │  │     ├─ range.cpython-310.pyc
      │  │     │  │     ├─ structures.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ debug
      │  │     │  │  ├─ console.py
      │  │     │  │  ├─ repr.py
      │  │     │  │  ├─ shared
      │  │     │  │  │  ├─ console.png
      │  │     │  │  │  ├─ debugger.js
      │  │     │  │  │  ├─ ICON_LICENSE.md
      │  │     │  │  │  ├─ less.png
      │  │     │  │  │  ├─ more.png
      │  │     │  │  │  └─ style.css
      │  │     │  │  ├─ tbtools.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ console.cpython-310.pyc
      │  │     │  │     ├─ repr.cpython-310.pyc
      │  │     │  │     ├─ tbtools.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ exceptions.py
      │  │     │  ├─ formparser.py
      │  │     │  ├─ http.py
      │  │     │  ├─ local.py
      │  │     │  ├─ middleware
      │  │     │  │  ├─ dispatcher.py
      │  │     │  │  ├─ http_proxy.py
      │  │     │  │  ├─ lint.py
      │  │     │  │  ├─ profiler.py
      │  │     │  │  ├─ proxy_fix.py
      │  │     │  │  ├─ shared_data.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ dispatcher.cpython-310.pyc
      │  │     │  │     ├─ http_proxy.cpython-310.pyc
      │  │     │  │     ├─ lint.cpython-310.pyc
      │  │     │  │     ├─ profiler.cpython-310.pyc
      │  │     │  │     ├─ proxy_fix.cpython-310.pyc
      │  │     │  │     ├─ shared_data.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ py.typed
      │  │     │  ├─ routing
      │  │     │  │  ├─ converters.py
      │  │     │  │  ├─ exceptions.py
      │  │     │  │  ├─ map.py
      │  │     │  │  ├─ matcher.py
      │  │     │  │  ├─ rules.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ converters.cpython-310.pyc
      │  │     │  │     ├─ exceptions.cpython-310.pyc
      │  │     │  │     ├─ map.cpython-310.pyc
      │  │     │  │     ├─ matcher.cpython-310.pyc
      │  │     │  │     ├─ rules.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ sansio
      │  │     │  │  ├─ http.py
      │  │     │  │  ├─ multipart.py
      │  │     │  │  ├─ request.py
      │  │     │  │  ├─ response.py
      │  │     │  │  ├─ utils.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ http.cpython-310.pyc
      │  │     │  │     ├─ multipart.cpython-310.pyc
      │  │     │  │     ├─ request.cpython-310.pyc
      │  │     │  │     ├─ response.cpython-310.pyc
      │  │     │  │     ├─ utils.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ security.py
      │  │     │  ├─ serving.py
      │  │     │  ├─ test.py
      │  │     │  ├─ testapp.py
      │  │     │  ├─ urls.py
      │  │     │  ├─ user_agent.py
      │  │     │  ├─ utils.py
      │  │     │  ├─ wrappers
      │  │     │  │  ├─ request.py
      │  │     │  │  ├─ response.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ request.cpython-310.pyc
      │  │     │  │     ├─ response.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ wsgi.py
      │  │     │  ├─ _internal.py
      │  │     │  ├─ _reloader.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ exceptions.cpython-310.pyc
      │  │     │     ├─ formparser.cpython-310.pyc
      │  │     │     ├─ http.cpython-310.pyc
      │  │     │     ├─ local.cpython-310.pyc
      │  │     │     ├─ security.cpython-310.pyc
      │  │     │     ├─ serving.cpython-310.pyc
      │  │     │     ├─ test.cpython-310.pyc
      │  │     │     ├─ testapp.cpython-310.pyc
      │  │     │     ├─ urls.cpython-310.pyc
      │  │     │     ├─ user_agent.cpython-310.pyc
      │  │     │     ├─ utils.cpython-310.pyc
      │  │     │     ├─ wsgi.cpython-310.pyc
      │  │     │     ├─ _internal.cpython-310.pyc
      │  │     │     ├─ _reloader.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ werkzeug-3.1.3.dist-info
      │  │     │  ├─ INSTALLER
      │  │     │  ├─ LICENSE.txt
      │  │     │  ├─ METADATA
      │  │     │  ├─ RECORD
      │  │     │  └─ WHEEL
      │  │     ├─ yaml
      │  │     │  ├─ composer.py
      │  │     │  ├─ constructor.py
      │  │     │  ├─ cyaml.py
      │  │     │  ├─ dumper.py
      │  │     │  ├─ emitter.py
      │  │     │  ├─ error.py
      │  │     │  ├─ events.py
      │  │     │  ├─ loader.py
      │  │     │  ├─ nodes.py
      │  │     │  ├─ parser.py
      │  │     │  ├─ reader.py
      │  │     │  ├─ representer.py
      │  │     │  ├─ resolver.py
      │  │     │  ├─ scanner.py
      │  │     │  ├─ serializer.py
      │  │     │  ├─ tokens.py
      │  │     │  ├─ _yaml.cp310-win_amd64.pyd
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ composer.cpython-310.pyc
      │  │     │     ├─ constructor.cpython-310.pyc
      │  │     │     ├─ cyaml.cpython-310.pyc
      │  │     │     ├─ dumper.cpython-310.pyc
      │  │     │     ├─ emitter.cpython-310.pyc
      │  │     │     ├─ error.cpython-310.pyc
      │  │     │     ├─ events.cpython-310.pyc
      │  │     │     ├─ loader.cpython-310.pyc
      │  │     │     ├─ nodes.cpython-310.pyc
      │  │     │     ├─ parser.cpython-310.pyc
      │  │     │     ├─ reader.cpython-310.pyc
      │  │     │     ├─ representer.cpython-310.pyc
      │  │     │     ├─ resolver.cpython-310.pyc
      │  │     │     ├─ scanner.cpython-310.pyc
      │  │     │     ├─ serializer.cpython-310.pyc
      │  │     │     ├─ tokens.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ _distutils_hack
      │  │     │  ├─ override.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ override.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ _pytest
      │  │     │  ├─ assertion
      │  │     │  │  ├─ rewrite.py
      │  │     │  │  ├─ truncate.py
      │  │     │  │  ├─ util.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ rewrite.cpython-310.pyc
      │  │     │  │     ├─ truncate.cpython-310.pyc
      │  │     │  │     ├─ util.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ cacheprovider.py
      │  │     │  ├─ capture.py
      │  │     │  ├─ compat.py
      │  │     │  ├─ config
      │  │     │  │  ├─ argparsing.py
      │  │     │  │  ├─ compat.py
      │  │     │  │  ├─ exceptions.py
      │  │     │  │  ├─ findpaths.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ argparsing.cpython-310.pyc
      │  │     │  │     ├─ compat.cpython-310.pyc
      │  │     │  │     ├─ exceptions.cpython-310.pyc
      │  │     │  │     ├─ findpaths.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ debugging.py
      │  │     │  ├─ deprecated.py
      │  │     │  ├─ doctest.py
      │  │     │  ├─ faulthandler.py
      │  │     │  ├─ fixtures.py
      │  │     │  ├─ freeze_support.py
      │  │     │  ├─ helpconfig.py
      │  │     │  ├─ hookspec.py
      │  │     │  ├─ junitxml.py
      │  │     │  ├─ legacypath.py
      │  │     │  ├─ logging.py
      │  │     │  ├─ main.py
      │  │     │  ├─ mark
      │  │     │  │  ├─ expression.py
      │  │     │  │  ├─ structures.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ expression.cpython-310.pyc
      │  │     │  │     ├─ structures.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ monkeypatch.py
      │  │     │  ├─ nodes.py
      │  │     │  ├─ outcomes.py
      │  │     │  ├─ pastebin.py
      │  │     │  ├─ pathlib.py
      │  │     │  ├─ py.typed
      │  │     │  ├─ pytester.py
      │  │     │  ├─ pytester_assertions.py
      │  │     │  ├─ python.py
      │  │     │  ├─ python_api.py
      │  │     │  ├─ python_path.py
      │  │     │  ├─ recwarn.py
      │  │     │  ├─ reports.py
      │  │     │  ├─ runner.py
      │  │     │  ├─ scope.py
      │  │     │  ├─ setuponly.py
      │  │     │  ├─ setupplan.py
      │  │     │  ├─ skipping.py
      │  │     │  ├─ stash.py
      │  │     │  ├─ stepwise.py
      │  │     │  ├─ terminal.py
      │  │     │  ├─ threadexception.py
      │  │     │  ├─ timing.py
      │  │     │  ├─ tmpdir.py
      │  │     │  ├─ unittest.py
      │  │     │  ├─ unraisableexception.py
      │  │     │  ├─ warnings.py
      │  │     │  ├─ warning_types.py
      │  │     │  ├─ _argcomplete.py
      │  │     │  ├─ _code
      │  │     │  │  ├─ code.py
      │  │     │  │  ├─ source.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ code.cpython-310.pyc
      │  │     │  │     ├─ source.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _io
      │  │     │  │  ├─ pprint.py
      │  │     │  │  ├─ saferepr.py
      │  │     │  │  ├─ terminalwriter.py
      │  │     │  │  ├─ wcwidth.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ pprint.cpython-310.pyc
      │  │     │  │     ├─ saferepr.cpython-310.pyc
      │  │     │  │     ├─ terminalwriter.cpython-310.pyc
      │  │     │  │     ├─ wcwidth.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _py
      │  │     │  │  ├─ error.py
      │  │     │  │  ├─ path.py
      │  │     │  │  ├─ __init__.py
      │  │     │  │  └─ __pycache__
      │  │     │  │     ├─ error.cpython-310.pyc
      │  │     │  │     ├─ path.cpython-310.pyc
      │  │     │  │     └─ __init__.cpython-310.pyc
      │  │     │  ├─ _version.py
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     ├─ cacheprovider.cpython-310.pyc
      │  │     │     ├─ capture.cpython-310.pyc
      │  │     │     ├─ compat.cpython-310.pyc
      │  │     │     ├─ debugging.cpython-310.pyc
      │  │     │     ├─ deprecated.cpython-310.pyc
      │  │     │     ├─ doctest.cpython-310.pyc
      │  │     │     ├─ faulthandler.cpython-310.pyc
      │  │     │     ├─ fixtures.cpython-310.pyc
      │  │     │     ├─ freeze_support.cpython-310.pyc
      │  │     │     ├─ helpconfig.cpython-310.pyc
      │  │     │     ├─ hookspec.cpython-310.pyc
      │  │     │     ├─ junitxml.cpython-310.pyc
      │  │     │     ├─ legacypath.cpython-310.pyc
      │  │     │     ├─ logging.cpython-310.pyc
      │  │     │     ├─ main.cpython-310.pyc
      │  │     │     ├─ monkeypatch.cpython-310.pyc
      │  │     │     ├─ nodes.cpython-310.pyc
      │  │     │     ├─ outcomes.cpython-310.pyc
      │  │     │     ├─ pastebin.cpython-310.pyc
      │  │     │     ├─ pathlib.cpython-310.pyc
      │  │     │     ├─ pytester.cpython-310.pyc
      │  │     │     ├─ pytester_assertions.cpython-310.pyc
      │  │     │     ├─ python.cpython-310.pyc
      │  │     │     ├─ python_api.cpython-310.pyc
      │  │     │     ├─ python_path.cpython-310.pyc
      │  │     │     ├─ recwarn.cpython-310.pyc
      │  │     │     ├─ reports.cpython-310.pyc
      │  │     │     ├─ runner.cpython-310.pyc
      │  │     │     ├─ scope.cpython-310.pyc
      │  │     │     ├─ setuponly.cpython-310.pyc
      │  │     │     ├─ setupplan.cpython-310.pyc
      │  │     │     ├─ skipping.cpython-310.pyc
      │  │     │     ├─ stash.cpython-310.pyc
      │  │     │     ├─ stepwise.cpython-310.pyc
      │  │     │     ├─ terminal.cpython-310.pyc
      │  │     │     ├─ threadexception.cpython-310.pyc
      │  │     │     ├─ timing.cpython-310.pyc
      │  │     │     ├─ tmpdir.cpython-310.pyc
      │  │     │     ├─ unittest.cpython-310.pyc
      │  │     │     ├─ unraisableexception.cpython-310.pyc
      │  │     │     ├─ warnings.cpython-310.pyc
      │  │     │     ├─ warning_types.cpython-310.pyc
      │  │     │     ├─ _argcomplete.cpython-310.pyc
      │  │     │     ├─ _version.cpython-310.pyc
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     ├─ _yaml
      │  │     │  ├─ __init__.py
      │  │     │  └─ __pycache__
      │  │     │     └─ __init__.cpython-310.pyc
      │  │     └─ __pycache__
      │  │        ├─ py.cpython-310.pyc
      │  │        ├─ six.cpython-310.pyc
      │  │        └─ typing_extensions.cpython-310.pyc
      │  ├─ pyvenv.cfg
      │  └─ Scripts
      │     ├─ activate
      │     ├─ activate.bat
      │     ├─ Activate.ps1
      │     ├─ deactivate.bat
      │     ├─ flask.exe
      │     ├─ jsonschema.exe
      │     ├─ pip.exe
      │     ├─ pip3.10.exe
      │     ├─ pip3.exe
      │     ├─ py.test.exe
      │     ├─ pytest.exe
      │     ├─ python.exe
      │     └─ pythonw.exe
      └─ __pycache__
         ├─ app.cpython-310.pyc
         ├─ config.cpython-310.pyc
         ├─ models.cpython-310.pyc
         └─ test_app.cpython-310-pytest-8.3.5.pyc

```
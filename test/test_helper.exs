ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Lashychat.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Lashychat.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Lashychat.Repo)


defmodule Neikos.CurrentUserView do
  use Neikos.Web, :view

  def render("show.json", %{user: user}) do
    user
  end

  def render("error.json", _) do
  end
end

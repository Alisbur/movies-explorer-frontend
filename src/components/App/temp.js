<Routes>
<Route path="/sign-up" element={<AuthForm submitBtnCap='Зарегистрироваться' title="Регистрация" onSubmit={handleRegisterSubmit} spanText={true}/>} />
<Route path="/sign-in" element={<AuthForm submitBtnCap='Войти' title="Вход" onSubmit={handleLoginSubmit} spanText={false}/>} />
<Route path="/" element={isLoggedIn ? <Navigate to="/cards" replace /> : <Navigate to="/sign-in" replace />}/>
<Route path="*" element={<Page404 />} />
<Route path="/cards" element={<ProtectedRouteElement element={Main} loggedIn={isLoggedIn} 
  onEditProfile={handleEditProfileClick}
  onAddPlace={handleAddPlaceClick}
  onEditAvatar={handleEditAvatarClick}
  onCardClick={handleCardClick}
  onCardLike={handleCardLike}
  onCardDelete={handleCardDelete}
  cards={cards}
/>} />
</Routes>